import React from "react";
import styled from "styled-components";
import { bg } from "../utils/utils";
import Header from "../Components/Header";
const Cocktail = () => {
  return (
    <CocktailWrapper>
      <Header headerBackground={bg} />
      <section className="mb30 mt30">hello</section>
    </CocktailWrapper>
  );
};

export default Cocktail;

const CocktailWrapper = styled.main`
  section {
    /* marg */
  }
`;
