const navigation = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/contact",
    name: "Contact",
  },
  {
    url: "/panel",
    name: "Panel",
  },
];
const getIngredientList = async () => {
  try {
    const request = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
    );
    const list = await request.json();
    return {
      data: list,
      error: false,
    };
  } catch {
    return {
      data: false,
      error: true,
    };
  }
};
const getCocktailsByIngredient = async (ing) => {
  try {
    const request = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ing}`
    );
    const list = await request.json();
    return {
      data: list,
      error: false,
    };
  } catch {
    return {
      data: false,
      error: true,
    };
  }
};
export { navigation, getIngredientList, getCocktailsByIngredient };
