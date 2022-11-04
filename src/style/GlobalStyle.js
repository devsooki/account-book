import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: 'Nanum Gothic', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    padding-bottom: 50px;
    height: 100%;
    background-color: #fce4ea;
  }
  ul,li {
    list-style: none;
  }
  input, textarea {
    outline: none;
  }
  button {
    border: 0;
    cursor: pointer;
  }
`;