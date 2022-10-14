import styled from "styled-components";

export const ButtonPrimary = styled.button`
  padding: 1rem 1.5rem;
  border: 3px solid #90aaeb;
  border-radius: 1rem;
  font-family: "Fuzzy Bubbles", cursive;
  font-size: 1rem;
  font-weight: 700;
  background-color: #90aaeb;
  color: #f5f5f5;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #90aaeb;
    color: #f5f5f5;
  }
`;

export const ButtonSecondary = styled.button`
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

export const Link = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20em 20em rgba(0, 0, 0, 0.1);
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

export const Credits = styled.div`
  position: absolute;
  right: 4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #cbd7f6;
  border-radius: 1rem;
`;
