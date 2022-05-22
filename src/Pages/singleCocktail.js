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
  const { individualCocktail } = appState;
  const [status, setStatus] = useState({
    error: false,
    loading: false,
    success: false,
  });
  useEffect(() => {
    let isApiSubscribed = true;
    console.log(individualCocktail);
    const caller = async () => {
      setStatus({ error: false, loading: true, success: false });
      const result = await getSingleCocktail(id);
      if (isApiSubscribed) {
        if (result.data) {
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
          <section>
            <h2>Here at individual cocktail</h2>
            <h3>{individualCocktail?.strDrink || "not availaible"}</h3>
          </section>
        )}
      </>
    </SingleCocktailWrapper>
  );
};

export default SingleCocktail;
const SingleCocktailWrapper = styled.main``;
