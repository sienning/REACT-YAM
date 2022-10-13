import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem 1.5rem;
  border: 3px solid #90aaeb;
  border-radius: 1rem;
  font-family: "Fuzzy Bubbles", cursive;
  font-size: 1rem;
  font-weight: 700;
  color: #90aaeb;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #90aaeb;
    color: #f5f5f5;
  }
`;
