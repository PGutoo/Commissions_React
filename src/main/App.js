import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Top from "./Top";
import Rodape from "./Rodape";
import Routes from "./Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Main>
        <Top />
        <Routes />
        <Rodape />
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.main`
  margin: 0em;
  padding: 0em;
  width: 62.3em;
  text-align: center;
  font-family: sans-serif;
  background: #f4b4ce;
`;
