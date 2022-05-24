import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header";
import { bg } from "../utils/utils";

const Contact = () => {
  return (
    <ContactWrapper>
      <Header headerBackground={bg} />
      <div className="tag mt10 falign">
        <h2>
          <NavLink to="/home">Home</NavLink>
        </h2>
        <h4>{">"}</h4>
        <h3>Contact</h3>
      </div>
      <section className="mt30 main">
        <h1 className="head mt10">Contact Us</h1>
        <div className="links mt20 f">
          <div className="link">
            <span className="fcenter">
              <i className="bi bi-geo-alt-fill"></i>
            </span>
            <p className="mt10">
              Address: <br />
              <small>
                ZD45, Behind Melvino Garden aso see, Melvino street, mararraba,
                Abuja
              </small>
            </p>
          </div>
          <div className="link">
            <span className="fcenter">
              <i className="bi bi-telephone-fill"></i>
            </span>
            <p className="mt10">
              Phone: <br />
              <a href="tel:+2349024783759">+2349024783759</a>
            </p>
          </div>
          <div className="link">
            <span className="fcenter">
              <i className="bi bi-telegram"></i>
            </span>
            <p className="mt10">
              Email: <br />
              <a href="mailto:i.am.alex.chika@gmail.com">
                i.am.alex.chika@gmail.com
              </a>
            </p>
          </div>
          <div className="link">
            <span className="fcenter">
              <i className="bi bi-globe"></i>
            </span>
            <p className="mt10">
              Website: <br />
              <a href="https://i-am-alex.netlify.app/">
                https://i-am-alex.netlify.app/
              </a>
            </p>
          </div>
        </div>
        <div className="contact mt30 f">
          <div className="form mt30">
            <form>
              <h2 className="font2 mb30">Reach Us Here</h2>
              <input
                placeholder="Enter Your Name"
                type="text"
                className="one"
              />
              <input
                placeholder="Enter a valid email address"
                type="email"
                name=""
                id=""
              />
              <textarea
                placeholder="Enter your message"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="mt30" type="button">
                SUBMIT
              </button>
            </form>
          </div>
          <div className="image">
            <img className="fwh" src={require("../Assets/card3.png")} alt="" />
          </div>
        </div>
        <div className="footnote">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          atque impedit placeat error quia! Minus quos asperiores nostrum enim
          itaque voluptatibus tenetur neque repellendus non, commodi vel
          reprehenderit porro quasi eveniet possimus, nam, et consectetur?
          Distinctio eos necessitatibus ratione similique nulla! Eligendi totam,
          eaque iusto corrupti nemo voluptate pariatur sint fugit quae neque
          earum sequi, ipsa dolorum facilis odit excepturi ad? Minus, maiores
          aperiam, similique dolore assumenda magni natus ipsam iste quam
          obcaecati commodi doloribus beatae sapiente odio recusandae possimus
          excepturi totam? Quidem, inventore minima? Blanditiis reprehenderit
          amet voluptas id atque enim nesciunt fugit est fugiat cupiditate,
          dolor nemo quis.
        </div>
      </section>
    </ContactWrapper>
  );
};

export default Contact;
const ContactWrapper = styled.main`
  .main {
    min-height: 100vh;
    background: #d9d9d9;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 1000px;
    padding: 10px;
  }
  h1.head {
    font-size: 2.5rem;
    text-align: center;
    color: grey;
  }
  .links {
    color: grey;
    flex-wrap: wrap;
    justify-content: space-around;
    .link {
      margin-bottom: 20px;
      text-align: center;
      width: 25%;
      min-width: 250px;
      span {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 auto;
        background-color: skyblue;
        color: white;
        i {
          font-size: 20px;
        }
      }
      a {
        color: teal;
      }
    }
  }
  .contact {
    flex-direction: column;
    background: white;
    box-shadow: 2px 2px 5px grey;
  }
  .form {
    padding: 20px;
  }
  form {
    h2 {
      font-size: 2rem;
    }
    input,
    textarea {
      display: block;
      border: none;
      outline: none;
      background: transparent;
      border-bottom: 2px solid black;
      width: 85%;
      padding: 10px;
    }
    input {
      margin-bottom: 30px;
    }
    textarea {
      max-width: 85%;
      min-width: 85%;
      max-height: 80px;
      min-height: 80px;
    }
    button {
      display: block;
      width: 150px;
      border: 2px solid black;
      padding: 10px;
    }
  }
  .image {
    /* margin-right: 0px; */
  }
  .footnote {
    width: 90%;
    margin: 0 auto;
    font-style: italic;
    color: grey;
    margin-top: 50px;
    padding-bottom: 40px;
    max-width: 600px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .contact {
      flex-direction: row;
    }
    .form {
      width: 60%;
    }
    .image {
      width: 40%;
    }
  }
`;
