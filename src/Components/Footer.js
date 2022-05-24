import React from "react";
import styled from "styled-components";
import { bg } from "../utils/utils";
const Footer = () => {
  return (
    <FooterWrap>
      <section className="headerWrapper f">
        <div className="cocktail f col">
          <div className="logo-con f">
            <div className="logo f">
              <img src={require("../Assets/cocktail.png")} alt="logo" />
              <h2>Cocktail...</h2>
            </div>
          </div>
          <h5 className="mt10">
            The copy warned the Little Blind Text, that where it came from it
            would have been a thousand times.
          </h5>
          <div className="socialIcons mt10">
            <span>
              <i className="bi bi-whatsapp"></i>
            </span>
            <span>
              <i className="bi bi-envelope"></i>
            </span>
            <span>
              <i className="bi bi-globe"></i>
            </span>
            <span>
              <i className="bi bi-github"></i>
            </span>
            <span>
              <i className="bi bi-twitter"></i>
            </span>
          </div>
        </div>
        <div className="company col f">
          <h3>company</h3>
          <h5>About</h5>
          <h5>Terms of Use</h5>
          <h5>Privacy Policy</h5>
          <h5>How it Works</h5>
          <h5>Contact Us</h5>
        </div>
        <div className="help col f">
          <h3>Get Help</h3>
          <h5>Support Carreer</h5>
          <h5>24/7 Service</h5>
          <h5>Quick Chat</h5>
        </div>
        <div className="support col f">
          <h3>Support</h3>
          <h5>FAQ</h5>
          <h5>Policy</h5>
          <h5>Business</h5>
        </div>
        <div className="contact col f">
          <h3>Contact</h3>
          <h5>
            ZD45, Behind Melvino Garden aso see, Melvino street, mararraba,
            Abuja
          </h5>
          <h5>Whatsapp</h5>
          <h5>Facebook</h5>
          <h5>Twitter</h5>
        </div>
      </section>
      <section className="footerFooter f">
        <h5>
          Copyright &#169; 2022{" "}
          <a href="https://i-am-alex.netlify.app/"> i-am-alex.netlify.app</a>
        </h5>
        <h5>
          <a href="https://i-am-alex.netlify.app/"></a> Coded by I-am-Alex
        </h5>
      </section>
    </FooterWrap>
  );
};

export default Footer;
const FooterWrap = styled.footer`
  ${bg}
  padding: 20px;
  .headerWrapper {
    flex-wrap: wrap;
    justify-content: space-around;
    .col {
      margin: 0 10px;
      margin-bottom: 20px;
      flex: 1;
      min-height: 100px;
      min-width: 220px;
      max-width: 320px;
      background: rgba(128, 128, 128, 0.05);
      padding: 10px;
    }
  }
  h5 {
    color: grey;
    padding: 5px 0;
  }
  .cocktail {
    .socialIcons {
      span {
        margin: 0 4px;
        color: skyblue;
      }
    }
    .logo-con {
      padding: 5px;
      justify-content: space-between;
      font-family: "Lobster", cursive;
      .logo {
        align-items: flex-end;
        color: #ffc966;
        h2 {
          text-shadow: 1px 1px 2px black;
        }
        img {
          height: 50px;
        }
      }
    }
  }
  .cocktail,
  .help,
  .support,
  .contact,
  .company {
    flex-direction: column;
    justify-content: space-around;
  }
  .footerFooter {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0px;
    color: teal;
    margin-top: 30px;
    border-top: 1px solid grey;
  }
  @media screen and (min-width: 546px) {
    .footerFooter {
      justify-content: space-between;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`;
