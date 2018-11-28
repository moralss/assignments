import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
  }

  html{
    background-color:#D1CFCF;
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

// header
export const Header = styled.h1`
  color: blue;
  text-align: center;
  font-weight: 250;
  font-size: 35px;
  margin: 20px;

  :after
{
    content:' ';
    display:block;
    margin:1px;
    border:0.5px solid black;
}
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

// button

// info
export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  span {
    justify-self: start;
  }

  label {
    text-align: left;
    color: #024242;
    margin-bottom:20px;
    margin-left: 350px;
  }
`;
// info

// button small

export const ButtonSmall = styled.button`
  padding: 5px;
  font-size: 10px;
  width:60px;
  margin:20px;
  background-color: blue;
  color: white;
  border-radius: 13px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

// button small

// buttonContainer

export const ButtonContainer = styled.div`
  display:flex;
  grid-gap: 20px;
  flex:row;
  flex-direction:row;
  margin-bottom: 20px;
  justify-content:center;
  

  button:nth-child(1) {
    background-color:black;
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
