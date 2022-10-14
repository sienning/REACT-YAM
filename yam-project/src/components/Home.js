import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setNbLancers,
  setNbBrelans,
  addLancers,
  reset,
} from "../store/actions/yam-actions";

import { setMise, setNbJetons, resetUser } from "../store/actions/user-actions";

import { Page, Header, Main, Row, Column } from "../styles/Layout";
import { H1, H2, H3, P } from "../styles/Content";
import { ButtonPrimary, ButtonSecondary, Credits } from "../styles/Components";
import { Input } from "../styles/Forms";

function Home() {
  const dispatch = useDispatch();
  const { nbJetons, mise } = useSelector((state) => state.userReducer);
  const { nbLancers, nbBrelans, lancers } = useSelector(
    (state) => state.yamReducer
  );

  function handleChangeLancers(e) {
    dispatch(setNbLancers(e.target.value));
  }

  function handleChangeMise(e) {
    const value = e.target.value;
    console.log(nbJetons);
    if (value <= nbJetons && value > 0) {
      dispatch(setMise(parseInt(e.target.value)));
    }
  }
  function handleRoll() {
    dispatch(reset());
    dispatch(addLancers());
    dispatch(setNbBrelans());
  }

  function handleGain() {
    const nbBrelansProba = ((1 / 36) * nbLancers).toFixed(0);
    const tauxdeReussite = ((nbBrelans / nbBrelansProba) * 100).toFixed(0);
    if (tauxdeReussite > 100) {
      const newNbJetons = parseInt(nbJetons) + parseInt(mise);
      dispatch(setNbJetons(parseInt(newNbJetons)));
    } else if (tauxdeReussite < 100) {
      const newNbJetons = nbJetons - parseInt(mise);
      dispatch(setNbJetons(parseInt(newNbJetons)));
    }
  }

  const handleResetJetons = () => {
    dispatch(resetUser());
  };

  return (
    <Page>
      <Header>
        <H1>yam</H1>
        <Credits>
          <H3>{nbJetons}🎟️</H3>
        </Credits>
      </Header>
      <Main>
        <Column>
          <H2>Règles du jeu</H2>
          <P style={{ textAlign: "center" }}>
            Vous avez 3 dés pour faire un brelan.
            <br />
            Si vous faites plus de brelans parmis tous vos lancers que le nombre
            <br />
            de brelans probable, vous remportez le double de votre mise.
            <br />
            Si vous en faites autant, vous remportez votre mise.
            <br />
            Si vous en faites moins , vous perdez votre mise.
            <br />
          </P>
        </Column>
        <Row>
          <div>
            {nbJetons === 0 ? (
              <Column>
                <P>Vous n'avez plus de tickets à mettre en jeu ...</P>
                <ButtonSecondary onClick={handleResetJetons}>
                  Recommencer
                </ButtonSecondary>
              </Column>
            ) : (
              <Column>
                <H3>Vous misez</H3>
                <Input
                  type="number"
                  min={0}
                  max={nbJetons}
                  onChange={handleChangeMise}
                />
              </Column>
            )}
          </div>
          <Column>
            <H3>Nombre de lancers</H3>
            <Input
              min={0}
              max={999}
              type="number"
              onChange={handleChangeLancers}
            />
          </Column>
        </Row>

        <ButtonPrimary onClick={handleRoll}>Lancer les dés</ButtonPrimary>

        {lancers.length > 0 && (
          <Link onClick={handleGain} to="/stats">
            Voir les résultats
          </Link>
        )}
      </Main>
    </Page>
  );
}

export default Home;
