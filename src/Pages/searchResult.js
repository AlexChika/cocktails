import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "../utils/Context";
import {
  getCocktailsByIngredient,
  getCocktailsByGlass,
  getCocktailsByCategory,
  getCocktailsByAlcohol,
} from "../utils/utils";
import { color } from "./CockTailHome";
import Error from "../Components/errror";
import Loading from "../Components/loading";
const SearchResult = () => {
  const navigate = useNavigate();
  const { appState, dispatch } = useGeneralContext();
  const { categorySelected, tag, searchedResult } = appState;
  const [searchedResultList, setsearchedResultList] = useState(searchedResult);
  const [status, setStatus] = useState({
    error: false,
    loading: false,
    success: false,
  });
  const [filter, setFilter] = useState("");
  const handleViewCocktail = (cocktail) => {
    dispatch({
      type: "SELECTED_INDIVIDUAL_COCKTAIL",
      payload: cocktail.strDrink,
    });
    navigate(`/cocktail/search=${cocktail.idDrink}`);
  };
  const handleFilterSearchedList = (filter) => {
    const newList = searchedResult
      .filter((item) => {
        if (
          item.strDrink
            .trim()
            .toLowerCase()
            .includes(filter.trim().toLowerCase())
        ) {
          return item;
        }
        if (!filter) return true;
      })
      .sort((a, b) => {
        return a.strDrink - b.strDrink;
      });
    setsearchedResultList(newList);
  };
  useEffect(() => {
    let isApiSubscribed = true;
    let clicked = false;
    let getter;
    if (categorySelected.categories) {
      clicked = true;
      getter = getCocktailsByCategory;
    }
    if (categorySelected.glass) {
      clicked = true;
      getter = getCocktailsByGlass;
    }
    if (categorySelected.ingredient) {
      clicked = true;
      getter = getCocktailsByIngredient;
    }
    if (categorySelected.alcohol) {
      clicked = true;
      getter = getCocktailsByAlcohol;
    }
    if (!clicked) return;
    const caller = async () => {
      setStatus({ ...status, error: false, loading: true, success: false });
      const result = await getter(tag.list);
      if (isApiSubscribed) {
        if (result.data) {
          setsearchedResultList(result.data.drinks);
          dispatch({
            type: "SET_SEARCHED_RESULTS_FROM_FILTER",
            payload: result.data.drinks,
          });
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
  }, [tag.list]);

  return (
    <SearchWrapper>
      {status.error && <Error />}
      {status.loading && <Loading />}
      {status.success && (
        <>
          <form className="form bgtrans1">
            <div className="formControl f">
              <input
                onChange={(e) => {
                  setFilter(e.target.value);
                  handleFilterSearchedList(e.target.value);
                }}
                value={filter}
                placeholder="Filter Out The cocktail tiles"
                type="text"
              />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
            <p>
              <i style={{ color: color() }} className="bi bi-info-lg"></i>
              click any of the cocktail images
            </p>
          </form>
          <section className="cocktailCon">
            {searchedResultList.map((cocktail, index) => (
              <div
                onClick={() => handleViewCocktail(cocktail)}
                style={{ backgroundColor: color() }}
                key={index}
                className="cocktail r"
              >
                <img
                  className="fwh"
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                />
                <p className="abs name">{cocktail.strDrink}</p>
              </div>
            ))}
          </section>
        </>
      )}
    </SearchWrapper>
  );
};

export default SearchResult;
const SearchWrapper = styled.section`
  .cocktailCon {
    display: grid;
    max-width: 95%;
    min-width: 280px;
    margin: 0 auto;
    margin-bottom: 30px;
    overflow: auto;
    justify-content: center;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-auto-rows: 63px;
    gap: 0.5em;
    .cocktail {
      grid-row: span 2;
      .name {
        z-index: 2;
        top: 50%;
        text-align: center;
        width: 100%;
        color: white;
        font-weight: 700;
      }
    }
    .cocktail:nth-of-type(3n) {
      grid-row: span 3;
    }
  }
  .form {
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 20px;
    overflow: hidden;
    .formControl {
      border: 2px solid white;
      border-radius: 16px;
      padding: 5px 0px;
      input {
        padding: 7px;
        flex: 0.8;
        border-right: 2px solid white;
      }
      button {
        padding: 7px;
        flex: 0.2;
        font-size: 20px;
      }
    }
    p {
      font-style: italic;
      font-size: 14px;
      text-align: center;
    }
  }
  @media screen and (min-width: 426px) {
    .cocktailCon {
      grid-template-columns: repeat(auto-fit, minmax(150px, 180px));
    }
  }
`;
