import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useGeneralContext } from "../utils/Context";
import { getSingleCocktail } from "../utils/utils";
import Loading from "../Components/loading";
import Error from "../Components/errror";
const SingleCocktail = () => {
  const params = useParams();
  const id = params.id.split("=")[1];
  const { appState, dispatch } = useGeneralContext();
  const { individualCocktail, tag } = appState;
  const [status, setStatus] = useState({
    error: false,
    loading: false,
    success: false,
  });
  const getIngr = (ing, mea) => {
    let ingr = [];
    let meal = individualCocktail;
    for (let i = 1; i <= 15; i++) {
      if (meal[ing + i] !== null) {
        if (meal[ing + i].trim().length > 0) {
          ingr.push(meal[ing + i] + " " + meal[mea + i]);
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return ingr;
  };
  useEffect(() => {
    let isApiSubscribed = true;
    const caller = async () => {
      setStatus({ error: false, loading: true, success: false });
      const result = await getSingleCocktail(id);
      if (isApiSubscribed) {
        if (result.data) {
          console.log(result.data.drinks[0]);
          dispatch({
            type: "SELECTED_INDIVIDUAL_COCKTAIL",
            payload: result.data.drinks[0].strDrink,
          });
          dispatch({
            type: "SET_INDIVIDUAL_COCKTAIL",
            payload: result.data.drinks[0],
          });
          setStatus({
            ...status,
            error: false,
            loading: false,
            success: true,
          });
        } else {
          setStatus({
            ...status,
            error: true,
            loading: false,
            success: false,
          });
        }
      }
    };
    caller();
    return () => {
      isApiSubscribed = false;
    };
  }, [id]);
  return (
    <SingleCocktailWrapper>
      <>
        {status.error && <Error />}
        {status.loading && <Loading />}
        {status.success && (
          <>
            <h2 className="orange name">
              {individualCocktail?.strDrink || "not availaible"}
            </h2>
            <section className="f">
              <article className="r">
                <div className="tag abs f">
                  <p> {">>"}</p>
                  <p>{tag.list || "Unknown"}</p>
                  <p>{">"}</p>
                  <p>{tag.name}</p>
                </div>
                <img
                  className="fwh"
                  src={individualCocktail?.strDrinkThumb}
                  alt={individualCocktail?.strDrink}
                />
              </article>
              <article>
                <div className="head mb20">
                  <h1 className="font1 mt10">{individualCocktail?.strDrink}</h1>
                  <div className="trayIndicator bgtrans1 f mt10">
                    <span>
                      <i className="bi bi-exclamation-diamond-fill"></i>
                      <p>{individualCocktail?.strAlcoholic}</p>
                    </span>
                    <span>
                      <i className="bi bi-tag-fill"></i>
                      <p>{individualCocktail?.strCategory}</p>
                    </span>
                    <span>
                      <i className="bi bi-cup-straw"></i>
                      <p>{individualCocktail?.strGlass}</p>
                    </span>
                  </div>
                </div>
                <div className="ingredients mt20">
                  <h1 className=" mb20">INGREDIENTS</h1>
                  <ul>
                    {getIngr("strIngredient", "strMeasure").map(
                      (recipe, index) => (
                        <li key={index}>{recipe}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="recipe mt20">
                  <h1>RECIPE</h1>
                  <p>{individualCocktail?.strInstructions}</p>
                </div>
              </article>
            </section>
          </>
        )}
      </>
    </SingleCocktailWrapper>
  );
};

export default SingleCocktail;
const SingleCocktailWrapper = styled.main`
  background: #d9d9d9;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 1000px;
  padding: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  .name {
    padding-bottom: 10px;
    text-shadow: 1px 1px 2px grey;
  }
  section {
    flex-direction: column;
    background: white;
    height: 100%;
    margin: 0 auto;
    max-width: 1000px;
    article {
      transition: all 0.4s linear;
      height: 400px;
      .tag {
        justify-content: space-around;
        width: 280px;
        font-size: 14px;
        flex-wrap: wrap;
        background: rgba(0, 0, 0, 0.2);
        padding: 10px 20px 10px 2px;
        top: 10px;
        color: white;
      }
    }

    article:last-of-type {
      overflow: auto;
      height: 450px;

      .head {
        text-align: center;

        h1 {
          font-size: 3rem;
        }
        .trayIndicator {
          padding: 5px;
          justify-content: space-around;
          font-style: italic;
          i {
            margin: 0px 3px;
            font-size: 20px;
          }
          p {
            font-size: 14px;
            margin: 0px 4px;
          }
          span:nth-of-type(1) {
            color: tomato;
          }
          span:nth-of-type(2) {
            color: teal;
          }
          span:nth-of-type(3) {
            color: grey;
          }
        }
      }
      .ingredients {
        padding-left: 30px;
        h1 {
          letter-spacing: 3px;
          font-size: 2rem;
          color: grey;
        }
        ul {
          padding-left: 10px;
          border-left: 1px solid grey;
          li {
            font-style: italic;
            color: grey;
          }
        }
      }
      .recipe {
        padding-left: 30px;

        h1 {
          letter-spacing: 3px;
          font-size: 2rem;
          color: grey;
        }
        p {
          margin-top: 10px;
          font-style: italic;
          color: grey;
        }
      }
    }
  }
  @media screen and (min-width: 546px) {
    padding: 20px;
    height: 90vh;
    section {
      width: 99%;
      flex-direction: row-reverse;
      article {
        width: 50%;
        height: 100%;
      }
      article:last-of-type {
        padding: 20px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    section {
      width: 95%;
      article:last-of-type {
        padding: 30px;
      }
    }
  }
`;
