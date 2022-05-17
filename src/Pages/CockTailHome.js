import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import { useGeneralContext } from "../utils/Context";
const CockTailHome = () => {
  const context = useGeneralContext();
  console.log(context, "heyy");
  let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function random() {
    return Math.floor(Math.random() * hex.length);
  }
  const color = (cb) => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[cb()];
    }
    return color;
  };
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
      <section className="body">
        <div className="header grid fcenter">
          <article className="content falign">
            <div className="heading">
              <h1>About This Project</h1>
              <p className="mt10 fcenter">
                <img
                  style={{ height: "30px" }}
                  className=""
                  src={require("../Assets/kodecamp.png")}
                  alt=""
                />{" "}
                A KodeCamp Intermediate Level Task 5
              </p>
            </div>
            <div className="">
              KodeCamp is designed to support capacity development in the field
              of information and communication technology (ICT) by providing
              training, mentorship, leadership, and career opportunities to
              young Nigerians. A one stop shop for technical talents in Africa
              by 2025.
            </div>
            <div className="about">
              <p>Want to Know more about KodeCamp ?</p>
              <div className="socials">
                <a href="https://kode.camp/">
                  <i className="bi bi-globe"></i>
                </a>
                <a href="https://www.linkedin.com/company/kodecamp-team/">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://mobile.twitter.com/kode_camp">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://web.facebook.com/kodehauzcamp/">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
              <p className="links">
                <a href="https://kode.camp/">Visit</a> kodecamp at{" "}
                <a href="https://kode.camp/">https://kode.camp/ </a>
              </p>
            </div>
          </article>
        </div>
        <div className="side grid fcenter">
          <article className="content falign">
            <div className="heading">
              <h1>Questions</h1>
            </div>
            <div className="head mb10 falign">
              <img
                src={require("../Assets/policeman.png")}
                alt="policeman icon"
              />
              <div>
                <h4>Why Is The Site Ugly & Empty?</h4>
                <h5> especially the hero page.</h5>
              </div>
            </div>
            <div className="head mb10 falign">
              <img src={require("../Assets/student.png")} alt="student icon" />
              <div>
                <p style={{ fontStyle: "italic" }}>
                  Ummm ... Sir, Google.com has soo many stuffs under the hood,
                  Yet the page is simple and straight to the point.
                </p>
              </div>
            </div>
            <div className="head mb10 falign">
              <img src={require("../Assets/policeman.png")} alt="" />
              <div>
                <h4>Is This Google.com?</h4>
                <h5>
                  Your Landing page isn't even attractive enough. are you sure
                  that you are meant to be a developer?
                </h5>
              </div>
            </div>
            <div className="head mb10 falign">
              <img src={require("../Assets/student.png")} alt="" />
              <div>
                <p style={{ fontStyle: "italic" }}>
                  Sir,the cocktail tiles are part of the hero. but they
                  overflowed on a small screen. I don't wanna be a developer
                  again 😭
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="grid one fcenter">
          <article className="content falign">
            <div className="heading">
              <h1>Aim Of Project</h1>
            </div>
            <div className="aims falign">
              <img src={require("../Assets/one.png")} alt="" />
              <div className="aims-body">
                <h5>React Router</h5>
                <p>
                  To demonstarte page Routing using the react router Library.
                </p>
              </div>
            </div>
            <div className="aims falign">
              <img src={require("../Assets/two.png")} alt="" />
              <div className="aims-body">
                <h5>State Management</h5>
                <p>
                  To demonstarte app wide state management of data using React
                  Context API
                </p>
              </div>
            </div>
            <div className="aims falign">
              <img src={require("../Assets/three.png")} alt="" />
              <div className="aims-body">
                <h5>Dynamic Content</h5>
                <p>
                  To show dynamic page content.. using url query to populate a
                  dynamic page.
                </p>
              </div>
            </div>
            <div className="aims falign">
              <img src={require("../Assets/one.png")} alt="" />
              <div className="aims-body">
                <h5>Multiple Api Consumption</h5>
                <p>
                  To demonstarte error handling with async requests. And
                  useEffect clean up.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="bottom grid two fcenter">
          <article className="content falign">
            <div className="heading">
              <h1>Attribution and Summary</h1>
            </div>
            <div>
              <p>
                <span>
                  <i className="bi bi-star-fill"></i>
                </span>{" "}
                You wouldn't believe it. But choosing the right colors was a
                nightmare. <br />
                <span> If the color still sucks, sorry pal!</span>
              </p>
            </div>
            <div>
              <p>
                <span>
                  <i className="bi bi-star-fill"></i>
                </span>{" "}
                This project is strictly for functionality. Priority is not on
                design.
                <span>
                  <br />
                  If you want a beauty functional app, give us a figma file.
                </span>
              </p>
            </div>
            <div>
              <p>
                <span>
                  <i className="bi bi-star-fill"></i>
                </span>{" "}
                All Icons and Images are from{" "}
                <span>
                  <a href="https://www.flaticon.com/">FLATICONS</a>
                </span>{" "}
                and{" "}
                <span>
                  <a href="https://www.freepik.com/">FREEPIK</a>
                </span>{" "}
                resectively
              </p>
            </div>
            <div>
              <span className="alex">
                <a href="https://i-am-alex.netlify.app/">Coded By I-am-alex</a>
              </span>
            </div>
          </article>
        </div>
      </section>
      <div className="drawer">
        {hex.map((hex) => {
          return (
            <p
              key={hex}
              style={{
                color: `${color(random)}`,
                fontWeight: "700",
                fontSize: "45px",
              }}
            >
              {hex}
            </p>
          );
        })}
      </div>
      <h1>hello people</h1>
    </Home>
  );
};
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
      top: calc(100% - 105px);
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
            text-shadow: 1px 1px 2px black;

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
    margin-top: 1140px;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 150px);
    row-gap: 2em;
    .grid {
      color: white;
    }
    .header {
      grid-row: 1/3;
      .content {
        text-align: center;
        align-self: flex-end;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 95%;
        color: #000020;
        .heading {
          h1 {
            color: tomato;
            font-size: 30px;
            margin: 0 auto;
            width: max-content;
            border-bottom: 1px solid tomato;
          }
          p {
          }
        }
        .links {
          a {
            color: teal;
          }
        }
        .socials {
          a {
            color: skyblue;
            margin: 0 6px;
          }
        }
      }
    }
    .side {
      grid-row: 3/6;
      .content {
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 95%;
        padding: 10px;
        background: #ff8a75;
        text-align: center;
        .heading {
          h1 {
            font-size: 25px;
            color: black;
            margin: 0 auto;
            width: max-content;
            border-bottom: 1px solid black;
          }
        }
        .head {
          width: 100%;
          justify-content: space-between;
          img {
            flex: 0.2;
          }
          div {
            flex: 0.75;
          }
        }
      }
    }
    .one {
      grid-row: 6/8;
      .content {
        padding: 0px 5px;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 95%;
        background: teal;
        .heading {
          h1 {
            color: #87ceeb;
            font-size: 23px;
            margin: 0 auto;
            width: max-content;
            border-bottom: 1px solid #87ceeb;
            text-shadow: 1px 1px 2px black;
          }
        }
        .aims {
          justify-content: space-between;
          width: 100%;
          img {
            /* flex: 0.2; */
            /* border: 2px solid red; */
          }
          .aims-body {
            flex: 0.95;
            text-align: center;
          }
          .aims-body p {
            font-size: 14px;
          }
        }
      }
    }
    .two {
      grid-row: 8/10;
      .content {
        padding: 10px;
        width: 100%;
        height: 95%;
        background: linear-gradient(153deg, white, pink);
        color: #000020;
        flex-direction: column;
        justify-content: space-around;
        .heading {
          h1 {
            color: green;
            font-size: 23px;
            margin: 0 auto;
            width: max-content;
            border-bottom: 1px solid green;
          }
        }
        p {
          font-style: italic;
          text-align: center;
        }
        span {
          text-align: center;
          color: green;
          font-style: italic;
        }
        .alex {
          color: teal;
        }
      }
    }
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
    .body {
      row-gap: 1em;

      .grid {
        .content {
          border-radius: 25px;
        }
      }
      .side {
        grid-area: side;
      }
      .header {
        grid-area: header;
      }
      .one {
        grid-area: bottom1;
      }
      .two {
        grid-area: bottom2;
      }
      margin-top: 540px;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 300px);
      grid-template-areas:
        "header header"
        "side bottom1"
        "side bottom2";
      .side {
        .content {
          width: 95%;
          height: 97%;
        }
      }
      .header {
        .content {
          width: 96%;
          height: 95%;
        }
      }
      .one {
        .content {
          width: 96%;
          height: 95%;
        }
      }
      .two {
        .content {
          width: 96%;
          height: 95%;
        }
      }
    }
  }
  @media screen and (min-width: 650px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 900px) {
    .body {
      .side {
        .content {
          width: 90%;
          height: 97%;
        }
      }
    }
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
    .body {
      margin-top: 240px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 300px);
      grid-template-areas:
        "side header header"
        "side bottom1 bottom2 ";
    }
  }
`;
