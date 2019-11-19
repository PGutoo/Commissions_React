import React from "react";
import styled from "styled-components";

import Wpp from "../img/Wpp.png";
import Facebook from "../img/Facebook.png";
import Instagram from "../img/Instagram.png";
import Twitter from "../img/Twitter.png";

export default function Rodape() {
  return (
    <Footer>
      <Cont>
        <Inf1>Telefone: (DDD) 9999-9999</Inf1>
        <Ul>
          <Div>
            <img src={Wpp} alt="Whatsapp" />
          </Div>
          <Inf2>(DDD) 99999-9999</Inf2>
        </Ul>
        <Inf3>Email: CommisionsAW@gmail.com</Inf3>
        <Inf4>Quer receber mais informações?</Inf4>
        <Input>
        <input
          type="email"
          required=""
          name="informação"
          id="informação"
          placeholder="      Digite seu email"
        />
        </Input>
        <Enviar>
          <input type="button" value="enviar" name="enviar" />
        </Enviar>
      </Cont>
      <Redes>
          <img src={Facebook} alt="Facebook" width="50" />
          <img src={Instagram} alt="Instagram" width="50" />
          <img src={Twitter} alt="Twitter" width="50"/>
      </Redes>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 62.3em;
  background: #fed3a8;
  display: flex;
  justify-content: space-between;
`;
const Cont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const Inf1 = styled.ul`
  display: flex;
`;
const Inf2 = styled.ul`
  padding: 0em 0em 0em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Inf3 = styled.ul`
  display: flex;
`;
const Inf4 = styled.ul`
  display: flex;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
`;
const Input = styled.div`
  display:flex;
  justify-content: center;
`;
const Enviar = styled.div`
  display: flex;
  justify-content: center;
`;
const Redes = styled.div`
  padding-right: 0em;
  background: #fed3a8;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  width: 2em;
`;

/*const Ajuste = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;*/
