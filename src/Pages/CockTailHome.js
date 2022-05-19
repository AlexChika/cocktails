import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Loading from "../Components/loading";
import Error from "../Components/errror";
import { useGeneralContext } from "../utils/Context";
import { getIngredientList, getCocktailsByIngredient } from "../utils/utils";
const CockTailHome = () => {
  const context = useGeneralContext();
  const cocktailCon = useRef(null);
  const [refresh, setRefresh] = useState(1);
  const [ingredients, setIngredients] = useState([]);
  const [singleIngredient, setSingleIngredient] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [status, setStatus] = useState({
    error: false,
    loading: true,
    success: false,
  });
  console.log(context, "heyy");

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function random(x) {
    return Math.floor(Math.random() * x.length);
  }
  const color = (cb) => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[cb(hex)];
    }
    return color;
  };
  const shuffleFunc = () => {
    setSingleIngredient(ingredients[random(ingredients)]);
  };
  const refreshFunc = () => {
    setRefresh(refresh + 1);
  };
  useEffect(() => {
    let isApiSubscribed = true;
    const caller = async () => {
      setStatus({ ...status, error: false, loading: true, success: false });
      const result = await getIngredientList();
      if (isApiSubscribed) {
        if (result.data) {
          setIngredients(result.data.drinks);
          setSingleIngredient(result.data.drinks[random(result.data.drinks)]);
        } else {
          setStatus({ ...status, error: true, loading: false, success: false });
        }
      }
    };
    caller();
    return () => {
      isApiSubscribed = false;
    };
  }, [refresh]);
  useEffect(() => {
    if (!singleIngredient) return;
    let isApiSubscribed = true;
    const caller = async () => {
      setStatus({ error: false, loading: true, success: false });
      const result = await getCocktailsByIngredient(
        singleIngredient.strIngredient1
      );
      if (isApiSubscribed) {
        if (result.data) {
          setStatus({ ...status, error: false, loading: false, success: true });
          setCocktails(result.data.drinks);
          console.log("data:", result.data);
        } else {
          setStatus({ ...status, error: true, loading: false, success: false });
        }
      }
    };
    caller();
    return () => {
      isApiSubscribed = false;
    };
  }, [singleIngredient]);

  useEffect(() => {
    if (!cocktailCon.current) return;
    if (cocktailCon.current.getBoundingClientRect().height > 569) {
      cocktailCon.current.style.overflow = "auto";
    } else {
      cocktailCon.current.style.overflow = "";
    }
    const cocktails = cocktailCon.current.querySelectorAll(".cocktail");
    cocktails.forEach((cocktail, index) => {
      cocktail.firstChild.style.backgroundColor = color(random);
      let i = index + 1;
      if (i % 3 === 0) {
        cocktail.style.gridRow = "span 3";
      } else {
        cocktail.style.gridRow = "span 2";
      }
    }); // return () => {
    //   cleanup
    // }
  });
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
              <img src={require("../Assets/four.png")} alt="" />
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
        <div className="grid two fcenter">
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
      <div className="cocktails mb30">
        <div className="heading pd10">
          <h1 className="font1">
            {Array.from("You Love Cocktails?").map((x, index) => (
              <span
                key={index}
                style={{
                  color: `${color(random)}`,
                  fontWeight: "700",
                }}
              >
                {x}
              </span>
            ))}
          </h1>
          <h4 className="font1">We Do Too...</h4>
          <p className="mt10">
            Here at{" "}
            <span
              style={{
                fontWeight: "700",
              }}
            >
              Cocktails
            </span>{" "}
            We Provide You With Every Possible Coctail recipee and mixing
            instructions.
          </p>
        </div>
        <div className="infoBar pd10 mt30">
          <div className="fcenter head">
            <h4 className="ing pd10">
              Ingredients:{" "}
              <span>{singleIngredient?.strIngredient1 || "Waiting.."}</span>{" "}
            </h4>
            <button
              onClick={shuffleFunc}
              disabled={status.loading ? true : false}
              className="btn"
            >
              Shuffle <i className="bi bi-shuffle"></i>
            </button>
          </div>
          <p className="info">
            {" "}
            Cocktails With{" "}
            <span style={{ color: "tomato", fontWeight: "700" }}>
              {singleIngredient?.strIngredient1 || "Waiting.."}{" "}
            </span>
            Inside
          </p>
        </div>
        <div>
          {status.error && (
            <Error>
              <button
                disabled={status.loading ? true : false}
                onClick={refreshFunc}
                className="btn"
              >
                Refresh
              </button>
            </Error>
          )}
          {status.loading && <Loading />}
          {status.success && (
            <section ref={cocktailCon} className="cocktailCon">
              {cocktails.map((cocktail, index) => (
                <div key={index} className="cocktail fcenter">
                  <article className="content">
                    <img
                      className="fwh"
                      src={cocktail.strDrinkThumb}
                      alt={cocktail.strDrink}
                    />
                  </article>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
      <section className="cardCon">
        <div className="heading">
          <h1 className="mb10" style={{ color: "tomato" }}>
            Search For Coctails
          </h1>
          <h2>
            We are committed to helping you find the best recipees and mixing
            instructions for your favourite cocktails.
          </h2>
        </div>
        <div className="cards mt30">
          <article className="card">
            <figure>
              <div className="cardImage">
                <img
                  className="fwh"
                  src={require("../Assets/card1.png")}
                  alt="cocktail glass"
                />
              </div>
              <div className="cardDetails">
                <p className="title"> Use Our Powerful Search</p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime placeat labore nobis eveniet voluptatem voluptate vero
                  ratione rem molestiae, sint quod assumenda quam, error
                  perferendis dignissimos odio vitae perspiciatis rerum cumque
                  laborum accusantium modi! Ea.
                </p>
                <button>Visit Our Search</button>
              </div>
            </figure>
          </article>
          <article className="card">
            <figure>
              <div className="cardImage">
                <img
                  className="fwh"
                  src={require("../Assets/card2.png")}
                  alt="cocktail glass"
                />
              </div>
              <div className="cardDetails">
                <p className="title"> Use Our Powerful Search</p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime placeat labore nobis eveniet voluptatem voluptate vero
                  ratione rem molestiae, sint quod assumenda quam, error
                  perferendis dignissimos odio vitae perspiciatis rerum cumque
                  laborum accusantium modi! Ea.
                </p>
                <button>Visit Our Search</button>
              </div>
            </figure>
          </article>
          <article className="card">
            <figure>
              <div className="cardImage">
                <img
                  className="fwh"
                  src={require("../Assets/card3.png")}
                  alt="cocktail glass"
                />
              </div>
              <div className="cardDetails">
                <p className="title"> Use Our Powerful Search</p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime placeat labore nobis eveniet voluptatem voluptate vero
                  ratione rem molestiae, sint quod assumenda quam, error
                  perferendis dignissimos odio vitae perspiciatis rerum cumque
                  laborum accusantium modi! Ea.
                </p>
                <button>Visit Our Search</button>
              </div>
            </figure>
          </article>
        </div>
      </section>
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
  /* .  */
  .cocktails {
    .heading {
      text-align: center;
      h1 {
        letter-spacing: 7px;
        text-shadow: 1px 1px 1px grey;
      }
      h4 {
        color: chocolate;
      }
      p {
        font-style: italic;
        font-size: 14px;
      }
    }
    .infoBar {
      width: 100%;
      max-width: 768px;
      margin: 0 auto;
      margin-top: 30px;
      .head {
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .ing {
        background: linear-gradient(to right, white, white);
        color: grey;
        span {
          color: tomato;
        }
      }
      .ing,
      button {
        padding: 10px 30px;
        width: 280px;
        margin-bottom: 20px;
      }
      button {
        color: white;
        background: skyblue;
        border-radius: 20px;
        font-size: 16px;
      }
      .info {
        text-align: center;y
        font-style: italic;
      }
    }
    .cocktailCon {
      display: grid;
      max-height: 570px;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
      grid-auto-rows: 130px;
      gap: 0.7em;
      .cocktail {
        color: white;
      }
      .content {
        width: 98%;
        height: 99%;
      }
    }
  }
  .cardCon {
    .heading {
      margin-top: 50px;
      text-align: center;
      h2 {
        margin: 0 auto;
        line-height: 1.5em;
        font-size: 16px;
        color: grey;
        max-width: 600px;
      }
    }
    .cards {
      margin-top: 30px;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(1, minmax(280px, 350px));
      grid-auto-rows: 500px;
      row-gap: 1em;
      .card {
        height: 500px;
        figure {
          display: flex;
          flex-direction: column;
          width: 95%;
          height: 100%;
          margin: 0 auto;
        }
        div {
          background: white;
          height: 50%;
          text-align: center;
          .title {
            font-size: 22px;
            color: tomato;
          }
          .text {
            color: grey;
          }
          button {
            background: skyblue;
            color: white;
            border-radius: 20px;
            padding: 10px 20px;
          }
        }
        .cardDetails {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 10px;
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
    .cocktails {
      .heading {
        p {
          font-size: 16px;
        }
      }
    }
    .cardCon {
      .cards {
        grid-template-columns: repeat(auto-fit, minmax(500px, 600px));
        grid-template-rows: repeat(3, 280px);
        .card {
          height: 280px;
          figure {
            flex-direction: row;
            width: 100%;
          }
          div {
            width: 50%;
            height: 100%;
            .text {
              font-size: 15px;
            }
          }
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
    .cardCon {
      .cards {
        grid-template-columns: repeat(3, minmax(280px, 320px));
        grid-template-rows: repeat(1, 500px);
        .card {
          height: 500px;
          figure {
            flex-direction: column;
            width: 95%;
          }
          div {
            width: 100%;
            height: 50%;
            .text {
              font-size: 15px;
            }
          }
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
