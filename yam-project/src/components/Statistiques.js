import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setNbJetons,
  resetUser,
} from "../store/actions/user-actions";

function Statistiques() {
  const { nbLancers, nbBrelans, lancers } = useSelector(
    (state) => state.yamReducer
  );

  const { nbJetons, mise } = useSelector(
    (state) => state.userReducer
  );


  const nbBrelansProba = ((1 / 36) * nbLancers).toFixed(0);

  const tauxdeReussite = ((nbBrelans / nbBrelansProba) * 100).toFixed(0);

  const renderGains = () => {
    let res = (<div>Vous n'avez rien gagné ...</div>)

    if (tauxdeReussite > 100) {
      res = (
        <div>
          <p>Vous gagnez le double de votre mise !</p>
          <p>GAIN : {mise * 2}</p>
        </div>
      )
    } else if (tauxdeReussite < 100) {
      res = (
        <div>
          <p>Vous perdez votre mise !</p>
          <p>GAIN : {0}</p>
        </div>
      )
    }

    return res
  }

  return (
    <>
      <h1>Statistiques</h1>

      <h2>Vos résultats</h2>
      <p>Nombre de lancers : {nbLancers}</p>
      <p>Nombre de brelans : {nbBrelans}</p>

      <h2>Probabilités</h2>
      <p>
        Nombre de brelans propables pour <b>{nbLancers}</b> lancers :
        {nbBrelansProba}
      </p>

      <h2>Taux de Réussite</h2>
      <p>{tauxdeReussite}%</p>

      <div>
        <h2>Vos gains : </h2>
        {
          renderGains()
        }
      </div>

      <Link to="/">Retourner aux lancers</Link>
    </>
  );
}

export default Statistiques;
