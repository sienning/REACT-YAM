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

const Input = styled.input`
  height: 30px;
  width: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
`;

function Home() {
  const dispatch = useDispatch();

  function handleChangeLancers(e) {
    dispatch(setNbLancers(e.target.value));
  }

  function handleRoll() {
    dispatch(reset());
    dispatch(addLancers());
    dispatch(setNbBrelans());
  }

  return (
    <div style={{ textAlign: "center" }} className="home-yam">
      <h1>Yam</h1>
      <div>
        <div className="nb-exp">
          <p>Nombre de lancers : </p>
          <Input type="number" onChange={handleChangeLancers} />
        </div>

        <Button onClick={handleRoll}>Lancer les dés</Button>

        <Link to="/stats">Voir les résultats</Link>
      </div>
    </div>
  );
}

export default Home;
