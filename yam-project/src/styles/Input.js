import styled from "styled-components";

export const Input = styled.input`
  padding: 1rem 1.5rem;
  text-align: center;
  border: none;
  border-bottom: 3px solid #90aaeb;
  width: fit-content;
  font-family: "Fuzzy Bubbles", cursive;
  font-size: 4rem;
  font-weight: 400;
  color: #070b0e;
  background-color: #f5f5f5;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
