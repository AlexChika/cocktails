import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header";
import { bg } from "../utils/utils";
const About = () => {
  return (
    <AboutWrapper>
      <Header headerBackground={bg} />
      <div className="tag  mt10 falign">
        <h2>
          <NavLink to="/">Home</NavLink>
        </h2>
        <h4>{">"}</h4>
        <h3>About</h3>
      </div>
      <section className="main f">
        <section className="sideA">
          <h1>About Cocktail Recipe Finder</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quam
            repudiandae ex suscipit minus perferendis ipsam impedit,
            voluptatibus minima optio, facilis similique obcaecati reprehenderit
            eum culpa possimus. Consequatur, rem et.
          </p>

          <button>
            <NavLink to="/">VISIT COCKTAIL</NavLink>
          </button>
        </section>
        <section className="sideB">
          <h1>What You Can Do</h1>
          <div>
            <article>
              <span>
                <i className="bi bi-activity"></i>
              </span>
              <div>
                <h4>Search For Cocktails</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam eveniet quia dignissimos maiores voluptates officiis?
                </p>
              </div>
            </article>
            <article>
              <span>
                <i className="bi bi-capslock-fill"></i>
              </span>
              <div>
                <h4>Find Recipees</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam eveniet quia dignissimos maiores voluptates officiis?
                </p>
              </div>
            </article>
            <article>
              <span>
                <i className="bi bi-lightning-charge-fill"></i>
              </span>
              <div>
                <h4>See Mixing Instructions</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam eveniet quia dignissimos maiores voluptates officiis?
                </p>
              </div>
            </article>
          </div>
        </section>
      </section>
    </AboutWrapper>
  );
};

export default About;
const AboutWrapper = styled.main`
  .main {
    flex-direction: column;
    max-width: 1000px;
    min-height: 100vh;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    color: white;
    padding: 20px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
      url(${require("../Assets/card2.png")});
  }
  .sideA {
    margin-bottom: 60px;
    h1 {
      font-size: 3rem;
      max-width: 400px;
      border-left: 5px solid orange;
      padding: 0 10px;
    }
    button {
      color: white;
      background: orange;
      padding: 10px 20px;
      letter-spacing: 3px;
    }
    p {
      margin-top: 30px;
      margin-bottom: 30px;
      opacity: 0.85;
      font-style: italic;
    }
  }
  .sideB {
    article {
      display: flex;
      margin-bottom: 50px;
      div {
        margin-left: 10px;

        h4 {
          margin-bottom: 10px;
        }
        p {
          font-size: 13px;
          opacity: 0.85;
        }
      }
    }
    h1 {
      text-align: center;
      margin-bottom: 50px;
    }
    h1,
    span {
      color: orange;
    }
    span {
      font-size: 60px;
    }
  }

  @media screen and (min-width: 546px) {
    .main {
      flex-direction: row;
      padding: 40px;
    }
    .sideA {
      width: 55%;
    }
    .sideB {
      width: 45%;
    }
  }
`;
