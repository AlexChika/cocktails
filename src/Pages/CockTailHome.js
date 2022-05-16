import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import { useGeneralContext } from "../utils/Context";
const CockTailHome = () => {
  const context = useGeneralContext();
  console.log(context);
  return (
    <Home>
      <section className="hero r">
        <Header headerBackground={` rgba(255, 255, 255, 0.1)`} />
        <div className="hero-heading bgtrans abs fcenter">
          <img
            className="abs"
            src={require("../Assets/cocktail.png")}
            alt="cocktail icon"
          />
          <h1>Cocktails Recipee</h1>
          <div className="fcenter">
            <h4>
              Find Any Recipee<span>...</span>
            </h4>
            <h4>Make Any Cocktail</h4>
          </div>
        </div>
        <div className="hero-tray abs">
          <article className="fcenter">
            <div className="hero-card">
              <div className="img-con f">
                <img src={require("../Assets/icon1.png")} alt="icon" />
                <h2>Whiskey</h2>
              </div>
              <div className="text-con mt20 fcenter">
                <p>
                  Whisky or whiskey is a type of distilled alcoholic beverage
                  made from fermented grain mash. Various grains are used for
                  different varieties, including barley, corn, rye, and wheat.
                </p>
              </div>
            </div>
          </article>
          <article className="fcenter">
            <div className="hero-card">
              <div className="img-con f">
                <img src={require("../Assets/icon2.png")} alt="icon" />
                <h2>Martini</h2>
              </div>
              <div className="text-con mt20 fcenter">
                <p>
                  The martini is a cocktail made with gin and vermouth, and
                  garnished with an olive or a lemon twist. Over the years, the
                  martini has become one of the best-known mixed alcoholic
                  beverages.
                </p>
              </div>
            </div>
          </article>
          <article className="fcenter">
            <div className="hero-card">
              <div className="img-con f">
                <img src={require("../Assets/icon3.png")} alt="icon" />
                <h2>Manhattan</h2>
              </div>
              <div className="text-con mt20 fcenter">
                <p>
                  A Manhattan is a cocktail made with whiskey, sweet vermouth,
                  and bitters. While rye is the traditional whiskey of choice,
                  other commonly used whiskies include Canadian whisky, bourbon,
                  blended whiskey.
                </p>
              </div>
            </div>
          </article>
          <article className="fcenter">
            <div className="hero-card">
              <div className="img-con f">
                <img src={require("../Assets/icon4.png")} alt="icon" />
                <h2>Magarita</h2>
              </div>
              <div className="text-con mt20 fcenter">
                <p>
                  A margarita is a cocktail consisting of tequila, orange
                  liqueur, and lime juice often served with salt on the rim of
                  the glass. The drink is served shaken with ice, blended with
                  ice, or without ice.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="body"></section>
    </Home>
  );
};
{
  /*bg <a href="https://www.freepik.com/photos/cola">
  Cola photo created by Racool_studio - www.freepik.com
</a>; */
}
/* border: 1px solid grey; */
{
  /* <a href="https://www.flaticon.com/free-icons/cocktail" title="cocktail icons">
  Cocktail icons created by Vitaly Gorbachev - Flaticon
</a>; */
}
export default CockTailHome;
const Home = styled.main`
  .hero {
    color: white;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${require("../Assets/cocktails.jpg")});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    /* start of hero-heading styling */
    .hero-heading {
      left: 50%;
      top: 50%;
      flex-direction: column;
      transform: translateX(-50%) translateY(-50%);
      font-family: "Dancing Script", cursive;
      width: 95%;
      max-width: 700px;
      min-height: 30vh;
      text-align: center;
      text-shadow: 1px 1px 1px black;
      /* h1 styling */
      h1 {
        font-size: 40px;
      }
      h4 {
        font-size: 20px;
        color: #ffeff2;
        color: #ffc966;
      }
      img {
        top: -25px;
        right: -10px;
      }
    }
    /* start of hero-tray styling */
    .hero-tray {
      left: 0%;
      top: 80%;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 80%));
      justify-content: center;
      grid-auto-rows: 300px;
      article {
        .hero-card {
          width: 95%;
          height: 95%;
          background: rgba(192, 192, 192, 0.3);
          border-radius: 20px;
          box-shadow: 2px 2px 15px black;
          overflow: hidden;
          .img-con {
            text-shadow: 2px 2px 2px black;

            align-items: center;
            img {
              padding: 10px 0;
              height: 100px;
            }
          }
          .text-con {
            text-align: center;
            padding: 10px;
          }
        }
      }
      article:nth-of-type(2) .hero-card .img-con,
      article:nth-of-type(3) .hero-card .img-con,
      article:nth-of-type(4) .hero-card .img-con {
        background-color: white;
      }
      article:nth-of-type(1) {
        color: tomato;
      }
      article:nth-of-type(2) {
        color: orange;
      }
      article:nth-of-type(3) {
        color: chocolate;
      }
      article:nth-of-type(4) {
        color: teal;
      }
    }
  }
  .body {
    min-height: 100vh;
    border: 2px solid red;
    /* background-color: black; */
  }
  @media screen and (min-width: 546px) {
    .hero {
      .hero-heading {
        h1 {
          font-size: 60px;
        }
        h4 {
          font-size: 30px;
        }
      }
      .hero-tray {
        grid-template-columns: repeat(2, minmax(10px, 360px));
        article:nth-of-type(2) .hero-card .img-con {
          background-color: transparent;
        }
      }
    }
  }
  @media screen and (min-width: 650px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
    .hero {
      .hero-tray {
        grid-template-columns: repeat(4, 1fr);
        article:nth-of-type(3) .hero-card .img-con,
        article:nth-of-type(4) .hero-card .img-con {
          background-color: transparent;
        }
      }
    }
  }
`;
