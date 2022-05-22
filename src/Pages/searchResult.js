import React from "react";
import styled from "styled-components";
const SearchResult = () => {
  return <SearchWrapper>hello from search result</SearchWrapper>;
};

export default SearchResult;
const SearchWrapper = styled.section`
  border: 2px solid red;
  display: grid;
  max-height: 90vh;
  overflow: auto;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
  grid-auto-rows: 130px;
  gap: 0.7em;
`;
