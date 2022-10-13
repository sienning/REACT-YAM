import React from 'react';
import styled from "styled-components";

const Input = styled.input`
    height: 30px;
    width: 50px;
`;

const Button = styled.button`
    padding: 10px 20px;

`;

function Home() {
    return (
        <div style={{ textAlign: "center" }} className='home-yam'>
            <h1>Yam</h1>
            <div>
                <div className='nb-exp'>
                    <p>Nombre d'expériences : </p>
                    <Input type="number" />
                </div>
                
                <Button >Lancer l'expérience</Button>
            </div>
        </div>
    )
}

export default Home;