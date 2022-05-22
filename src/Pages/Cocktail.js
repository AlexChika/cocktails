import React from "react";
import styled from "styled-components";
import { useGeneralContext } from "../utils/Context";
import { bg } from "../utils/utils";
import { color } from "./CockTailHome";
import Header from "../Components/Header";
const list = [
  "hello",
  "how",
  "do you",
  "do today",
  "hope you are",
  "alright",
  "as for me",
  " I am fine",
  "say hi",
  "to mummy",
  "for me pls",
  "hello",
  "how",
  "do you",
  "do today",
  "hope you are",
  "alright",
  "as for me",
  " I am fine",
  "say hi",
  "to mummy",
  "for me pls",
];
const Cocktail = () => {
  const { appState, dispatch } = useGeneralContext();
  const { categorySelected, category } = appState;
  const categorySelector = (selected) => {
    dispatch({ type: "SELECTED_TOP_LEVEL_CATEGORY", payload: selected });
  };
  return (
    <CocktailWrapper>
      <Header headerBackground={bg} />
      <section className="header mb30 mt10">
        <div className="tag bgtrans1 mb20">
          <h3>
            <i style={{ color: color() }} className="bi bi-info-lg"></i>
            {Object.values(category).map((value, index) => (
              <span
                style={{ color: color(), borderLeft: ` 1px solid ${color()}` }}
                key={index}
              >
                {value}
              </span>
            ))}
          </h3>
        </div>
        <h1 className="heading mb20">Use Our Aided Search</h1>
        <div className="category">
          <div className="btnCon f">
            <button
              onClick={() => categorySelector("Categories")}
              className={categorySelected.categories && "activeBtn"}
            >
              Categories
            </button>
            <button
              onClick={() => categorySelector("Glass Type")}
              className={categorySelected.glass && "activeBtn"}
            >
              Glass Type
            </button>
            <button
              onClick={() => categorySelector("Ingredient")}
              className={categorySelected.ingredient && "activeBtn"}
            >
              Ingredient
            </button>
            <button
              onClick={() => categorySelector("Alcohol/Non")}
              className={categorySelected.alcohol && "activeBtn"}
            >
              Alcohol/Non
            </button>
          </div>
          <p>
            {" "}
            <i style={{ color: color() }} className="bi bi-info-lg"></i>
            Select One Of four Categories
          </p>
        </div>
      </section>
      <section className="list">
        {list.map((item, index) => {
          return <div>{item}</div>;
        })}
      </section>
    </CocktailWrapper>
  );
};
<i className="bi bi-info-circle-fill"></i>;
export default Cocktail;

const CocktailWrapper = styled.main`
  .header {
    .heading {
      text-align: center;
      color: #ffc966;
      text-shadow: 1px 0px 1px black;
    }
    .tag {
      padding: 5px;
      max-width: 600px;
      width: 95%;
      h3 {
        font-size: 14px;
      }
      span {
        margin-left: 4px;
        /* text-shadow: 1px 1px 1px black; */
        padding-left: 4px;
      }
    }
    .category {
      text-align: center;
      .btnCon {
        justify-content: center;
        flex-wrap: wrap;
        button {
          color: white;
          margin: 0px 4px;
          margin-bottom: 10px;
          padding: 10px 25px;
          border-radius: 10px;
          background: grey;
        }
        button.activeBtn {
          background: white;
          color: #ffc966;
        }
      }
      p {
        margin-top: 7px;
        font-style: italic;
        font-size: 14px;
      }
    }
  }
`;
