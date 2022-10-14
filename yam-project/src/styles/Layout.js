import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 24vh;
  padding: 0rem 4rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: space-around;
  gap: 4rem;
  width: 100%;
  min-height: 76vh;
  padding: 2rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 40%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
