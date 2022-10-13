import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setNbExperiences,
  setNbBrelans,
  addExperiences,
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

  function handleChangeExperiences(e) {
    dispatch(setNbExperiences(e.target.value));
  }

  function handleRoll() {
    dispatch(reset());
    dispatch(addExperiences());
    dispatch(setNbBrelans());
  }

  return (
    <div style={{ textAlign: "center" }} className="home-yam">
      <h1>Yam</h1>
      <div>
        <div className="nb-exp">
          <p>Nombre d'expériences : </p>
          <Input type="number" onChange={handleChangeExperiences} />
        </div>

        <Button onClick={handleRoll}>Lancer l'expérience</Button>

        <div className="nb-brelans">
          <p>Nombre de brelans : </p>
          <p>{useSelector((state) => state.yamReducer.nbBrelans)}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
