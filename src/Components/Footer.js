import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterWrap>
      <div className="a"></div>
      <div className="b"></div>
    </FooterWrap>
  );
};

export default Footer;
const FooterWrap = styled.footer`
  border: 2px solid red;
  display: flex;
  flex-direction: row;
  height: 80vh;
  .a,
  .b {
    height: 50%;
  }
  @media screen and (min-width: 546px) {
    flex-direction: column;
    .a,
    .b {
      height: 100%;
    }
  }
`;
