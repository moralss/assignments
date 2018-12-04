import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
  }

  html{
    background-color:#D1CFCF;
    font-weight: 150;
  }
`;

// input

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

// input

// errors span

//

// header

export const Header2 = styled.h1`
  color: blue;
  text-align: left;
  font-weight: 200;
  font-size: 25px;
  margin: 20px;

  :after {
    content: " ";
    display: block;
    margin: 1px;
  }
`;

export const Header = styled.h1`
  color: blue;
  text-align: center;
  font-weight: 250;
  font-size: 35px;
  margin: 20px;

  :after {
    content: " ";
    display: block;
    margin: 1px;
    border: 0.5px solid black;
  }
`;

export const ErrorSpan = styled.span`
  display: block;
  color: red;
  fontsize: 10px;
`;

// header

export const DashboardContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 30px;
`;

// button

export const ButtonMedium = styled.button`
  padding: 5px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border-radius: 13px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

// button primary

export const ButtonPrimary = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  color: blue;
  padding: 5px;
  border: none;
  borderradius: 2px;

  &:hover {
    cursor: pointer;
  }
`;

// button small

export const ButtonSmall = styled.button`
  padding: 5px;
  font-size: 10px;
  width: 60px;
  margin: 20px;
  background-color: blue;
  color: white;
  border-radius: 13px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

// button small

// button primary

// button

// info
export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 300px;
  border: 0.1px solid black;
  margin: 10px;
  justify-items: center;

  span {
  }

  label {
    display: block;
    text-align: left;
    color: #024242;
  }

  > div {
    justify-self: center;
  }
`;

// Info

// Container

export const Container = styled.div`
  text-align: center;
`;

// Container

// buttonContainer

export const ButtonContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  flex: row;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: center;

  button:nth-child(1) {
  }

  button:nth-child(2) {
  }
`;

// buttonContainer

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap:20px;
  label {
      font-size:20px;
      grid-column-start:1;
      grid-column-end:3;
      color:#024242;
      font-weight:200;
  } 

  a{
    justify-conent:center;
    justify-self:end;
    align-self:end
    text-decoration:none;
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
