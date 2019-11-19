import React from "react";
import styled from "styled-components";

import Zelda from "../../img/Zelda.png";

export default function Centro() {
  return (
    <Section>
      <figure>
        <img src={Zelda} alt="BannerZelda" />
      </figure>
      <section>
        <h1>Sobre Nós</h1>
        <p>
          A Commissions AnyWhere permite acesso gratuito ao artista e ao
          cliente, uma plataforma simples de divulgação e venda online.
          Facilitamos seu contato com seus clientes, de forma fácil e segura.
          Exiba seu portifólio, encontre artes digitais únicas do seu artista
          preferido em qualquer lugar.
        </p>
      </section>
    </Section>
  );
}

const Section = styled.section`
  padding: 0em;
  width: 62.3em;
  figure {
    display: flex;
    width: 62.3em;
    align-content: flex-start;
    justify-content: flex-start;
    /*width: 59em;*/
    margin: 0em;
    padding: 0em;
  }
  section {
    padding-top: 1.3em;
    margin-top: 3em;
    padding-bottom: 2.4em;
    width: 62.3em;
    background: #fed3a8;
  }
  h1 {
    display: flex;
    justify-content: center;
    font-size: 2em;
  }
  p {
    font-size: 2rem;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
`;
