import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setNbJetons, resetUser } from "../store/actions/user-actions";
import { Page, Header, Main, Row, Column } from "../styles/Layout";
import { H1, H2, H3, P } from "../styles/Content";
import { ButtonPrimary, ButtonSecondary, Credits } from "../styles/Components";
import { Input } from "../styles/Forms";

function Statistiques() {
  const { nbLancers, nbBrelans, lancers } = useSelector(
    (state) => state.yamReducer
  );

  const { nbJetons, mise } = useSelector((state) => state.userReducer);

  const nbBrelansProba = ((1 / 36) * nbLancers).toFixed(0);

  const tauxdeReussite = ((nbBrelans / nbBrelansProba) * 100).toFixed(0);

  const renderGains = () => {
    let res = <div>Vous n'avez rien gagné ...</div>;

    if (tauxdeReussite > 100) {
      res = (
        <div>
          <p>Vous gagnez le double de votre mise !</p>
          <p>GAIN : {mise * 2}</p>
        </div>
      );
    } else if (tauxdeReussite < 100) {
      res = (
        <div>
          <p>Vous perdez votre mise !</p>
          <p>GAIN : {0}</p>
        </div>
      );
    }

    return res;
  };

  return (
    <>
      <Page>
        <Header>
          <H1>yam</H1>
        </Header>
        <Main>
          <H2>Vos résultats</H2>
          <H3>{renderGains()}</H3>

          <Row>
            <p>Lancers : {nbLancers}</p>
            <p>Brelans : {nbBrelans}</p>
          </Row>

          <H2>Probabilités</H2>
          <p>
            Nombre de brelans propables pour <b>{nbLancers}</b> lancers :{" "}
            {nbBrelansProba}
          </p>

          <Column>
            <H2>Taux de Réussite</H2>
            <p>{tauxdeReussite}%</p>
          </Column>

          <Link to="/">Retourner aux lancers</Link>
        </Main>
      </Page>
    </>
  );
}

export default Statistiques;
