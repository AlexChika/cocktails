import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { useGeneralContext } from "../utils/Context";
import {
  getIngredientList,
  getAlcoholList,
  getGlassList,
  getCategoryList,
} from "../utils/utils";
import { bg } from "../utils/utils";
import { color } from "./CockTailHome";
import Header from "../Components/Header";
import Error from "../Components/errror";
import Loading from "../Components/loading";
// const list = [
//   "hello",
//   "how",
//   "do you",
//   "do today",
//   "hope you are",
//   "alright",
//   "as for me",
//   " I am fine",
//   "say hi",
//   "to mummy",
//   "for me pls",
//   "hello sir",
//   "how is",
//   "lol you",
//   "for today",
//   "hope you are my",
//   "alright sir",
//   "as for them",
//   " I am cool",
//   "say him",
//   "let mummy",
//   "for me tho",
// ];
const Cocktail = () => {
  const { appState, dispatch } = useGeneralContext();
  const { categorySelected, tag, list } = appState;
  const [status, setStatus] = useState({
    error: false,
    loading: false,
    success: false,
  });
  const [btnClicked, setBtnClicked] = useState(false);
  const [property, setProperty] = useState("");
  const categorySelector = (selected) => {
    dispatch({ type: "SELECTED_TOP_LEVEL_CATEGORY", payload: selected });
  };
  const listBtnSelector = (selected) => {
    dispatch({ type: "SELECTED_FROM_LIST", payload: selected });
    console.log("i was clicked");
  };
  useEffect(() => {
    let isApiSubscribed = true;
    let clicked = false;
    let getter;
    if (categorySelected.categories) {
      clicked = true;
      getter = getCategoryList;
      console.log(getter);
    }
    if (categorySelected.glass) {
      clicked = true;
      getter = getGlassList;
    }
    if (categorySelected.ingredient) {
      clicked = true;
      getter = getIngredientList;
    }
    if (categorySelected.alcohol) {
      clicked = true;
      getter = getAlcoholList;
    }
    if (!clicked) return;
    const caller = async () => {
      setStatus({ ...status, error: false, loading: true, success: false });
      const result = await getter();
      if (isApiSubscribed) {
        if (result.data) {
          dispatch({ type: "SET_LIST_BUTTONS", payload: result.data.drinks });
          setStatus({
            ...status,
            error: false,
            loading: false,
            success: true,
          });
        } else {
          setStatus({ ...status, error: true, loading: false, success: false });
        }
      }
    };
    caller();
    return () => {
      isApiSubscribed = false;
    };
  }, [categorySelected]);
  useEffect(() => {
    if (categorySelected.categories) {
      setProperty("strCategory");
    }
    if (categorySelected.glass) {
      setProperty("strGlass");
    }
    if (categorySelected.ingredient) {
      setProperty("strIngredient1");
    }
    if (categorySelected.alcohol) {
      setProperty("strAlcoholic");
    }
  }, [categorySelected]);
  return (
    <CocktailWrapper>
      <Header headerBackground={bg} />
      <section className="header mb30 mt10">
        <div className="tag bgtrans1 mb20">
          <h3>
            <i style={{ color: color() }} className="bi bi-info-lg"></i>
            {Object.values(tag).map((value, index) => (
              <span key={index}>{value}</span>
            ))}
          </h3>
        </div>
        <h1 className="heading mb20">Use Our Aided Search</h1>
        <div className="category">
          <div className="btnCon f">
            <button
              onClick={() => categorySelector("Categories")}
              className={categorySelected.categories ? "activeBtn" : ""}
            >
              Categories
            </button>
            <button
              onClick={() => categorySelector("Glass Type")}
              className={categorySelected.glass ? "activeBtn" : ""}
            >
              Glass Type
            </button>
            <button
              onClick={() => categorySelector("Ingredient")}
              className={categorySelected.ingredient ? "activeBtn" : ""}
            >
              Ingredient
            </button>
            <button
              onClick={() => categorySelector("Alcohol/Non")}
              className={categorySelected.alcohol ? "activeBtn" : ""}
            >
              Alcohol/Non
            </button>
          </div>
          <p>
            {" "}
            <i style={{ color: color() }} className="bi bi-info-lg"></i>
            select one of four categories
          </p>
        </div>
      </section>
      <section className="list">
        {status.error && <Error />}
        {status.loading && <Loading />}
        {status.success && (
          <div>
            <h3 className="heading">Cocktails From {tag.category}</h3>
            <p className="mb20">
              <i style={{ color: color() }} className="bi bi-info-lg"></i>
              select from any of the buttons
            </p>
            <div className="listBtns f">
              {list.map((item, index) => {
                return (
                  <button
                    onClick={() =>
                      listBtnSelector(
                        item[property][0].toUpperCase() +
                          [...item[property]].slice(1).join("")
                      )
                    }
                    style={{ backgroundColor: color() }}
                    key={index}
                    className={
                      tag?.list?.toLowerCase() === item[property].toLowerCase()
                        ? "activeBtn"
                        : ""
                    }
                    disabled={btnClicked ? true : false}
                  >
                    {item[property]}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <NavLink to="/cocktail/search=1234">see the other page</NavLink>
      </section>
      <Outlet />
    </CocktailWrapper>
  );
};
<i className="bi bi-info-circle-fill"></i>;
export default Cocktail;

const CocktailWrapper = styled.main`
  .heading {
    text-align: center;
    color: #ffc966;
    text-shadow: 1px 0px 2px grey;
  }
  .header {
    .tag {
      padding: 5px;
      max-width: 600px;
      width: 95%;
      h3 {
        font-size: 14px;
      }
      span {
        margin-left: 4px;
        padding-left: 4px;
      }
      span:nth-of-type(1) {
        color: tomato;
        border-left: 1px solid tomato;
      }
      span:nth-of-type(2) {
        color: goldenrod;
        border-left: 1px solid goldenrod;
      }
      span:nth-of-type(3) {
        color: skyblue;
        border-left: 1px solid skyblue;
      }
      span:nth-of-type(4) {
        color: greenyellow;
        border-left: 1px solid greenyellow;
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
        /* margin-top: 7px; */
        font-style: italic;
        font-size: 14px;
      }
    }
  }
  .list {
    .listBtns {
      max-width: 500px;
      margin: 0 auto;
      justify-content: space-around;
      flex-wrap: wrap;
      button {
        padding: 10px 14px;
        background: grey;
        border-radius: 10px;
        margin: 3px 3px;
        font-weight: 700;
        color: white;
      }
      button.activeBtn {
        background: white !important;
        color: #ffc966;
        min-width: 150px;
      }
    }
    p {
      font-style: italic;
      font-size: 14px;
      text-align: center;
    }
  }
`;
