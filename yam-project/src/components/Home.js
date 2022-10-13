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

import {
  setMise,
  setNbJetons,
  resetUser,
} from "../store/actions/user-actions";

const Input = styled.input`
  height: 30px;
  width: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
`;

function Home() {
  const dispatch = useDispatch();
  const { nbJetons, mise } = useSelector(
    (state) => state.userReducer
  );
  const { nbLancers, nbBrelans } = useSelector(
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
  }

  return (
    <div style={{ textAlign: "center" }} className="home-yam">
      <h1>Yam</h1>
      <div>
        Vous avez {nbJetons} jetons
      </div>
      <div>
        {
          nbJetons === 0 ?
            <div>
              <p>Vous n'avez plus de jeton à mettre en jeu ...</p>
              <Button onClick={handleResetJetons}>Recommencer</Button>
            </div> :
            <div>
              Vous misez
              <input type="number" min={0} max={nbJetons} onChange={handleChangeMise} />
            </div>
        }
      </div>
      <div>
        <div className="nb-exp">
          <p>Nombre de lancers : </p>
          <Input min={0} type="number" onChange={handleChangeLancers} />
        </div>

        <Button onClick={handleRoll}>Lancer les dés</Button>

        <Link onClick={handleGain} to="/stats">Voir les résultats</Link>
      </div>
    </div>
  );
}

export default Home;
