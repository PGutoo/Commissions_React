import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Cad from "../img/Cad.png";
import Login from "../img/login.png";

export default function Top() {
  return (
    <Header>
      <Div>
        <H1>Commissions</H1>
        <H3>Anywhere</H3>
      </Div>
      <Contato>Contato</Contato>
      <Lc>
        <Item1>Login</Item1>
        <Section1>
          <img src={Login} alt="Login" />
        </Section1>
        <Item3>Cadastro</Item3>
        <Section2>
          <img src={Cad} alt="Cadastro" />
        </Section2>
      </Lc>
    </Header>
  );
}

const Header = styled.header`
  background: #f4b4ce;
  display: flex;
  justify-content: space-around;
  padding: 0em;
  width: 62.3em;
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2em;
  width: 12.6em;
`;

const H1 = styled.h1`
  font-family: Alex Brush;
  display: flex;
  justify-content: flex-end;
`;

const H3 = styled.h3`
  margin: -1.7em 0em 0em 5.2em;
  font-family: Alex Brush;
`;

const Contato = styled.li`
  font-family: Cookie;
  display: flex;
  align-items: center;
  margin: 0.5em 1em 0.5em 20em;
`;
const Lc = styled.section`
  background: #f4b4ce;
  display: flex;
  justify-content: space-around;
`;
const Item1 = styled.li`
  font-family: Cookie;
  margin: 0em 0em 0em 0.5em;
  display: flex;
  background: #f4b4ce;
  align-self: center;
`;

const Item3 = styled.li`
  font-family: Cookie;
  margin: 0em 0em 0em 2em;
  display: flex;
  background: #f4b4ce;
  align-self: center;
`;

const Section1 = styled.section`
  width: 1em;
  display: flex;
  align-self: center;
`;
const Section2 = styled.section`
  width: 2em;
  display: flex;
  align-self: center;
`;
