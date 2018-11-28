import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  height: 40px;
  ::placeholder {
    color: blue;
    font-size: 16px;
  }
`;

export const Header = styled.h1`
  color: blue;
  text-align: center;
  font-weight: 250;
  font-size: 28px;
  margin: 20px;
`;

export const DashboardContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 30px;
`;



export const ButtonMedium = styled.button`


`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap:20px;
  h2 {
      font-size:20px;
      grid-column-start:1;
      grid-column-end:3;
      color:#024242;
      font-weight:20px;
  }
`;

export const Form = styled.form`
  font-size: 15px;
  padding-top: 20px;
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  margin: 15px;
`;

export const NavBar = styled.div`
  color: white;
  background-color: blue;
  padding: 10px;

  a {
    color: white;
    text-decoration: none;
  }

  li {
    display: inline-block;
    margin: 10px;
  }

  a:hover {
    color: pink;
  }
`;

export const Button = styled.button`
  width: 100px;
  // margin: 0 auto;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;
