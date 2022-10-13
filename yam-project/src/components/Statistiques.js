import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

function Statistiques() {
  const { nbLancers, nbBrelans, lancers } = useSelector(
    (state) => state.yamReducer
  );

  const nbBrelansProba = ((1 / 36) * nbLancers).toFixed(0);

  const tauxdeReussite = ((nbBrelans / nbBrelansProba) * 100).toFixed(0);

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

      <Link to="/">Retourner aux lancers</Link>
    </>
  );
}

export default Statistiques;
