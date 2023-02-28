import axios from "axios";

const formatMeal = (data) => {
  const meal = data.meals[0];
  const {
    idMeal,
    strMeal,
    strInstructions,
    strTags,
    strMealThumb,
    strArea,
    strCategory,
    strYoutube,
  } = meal;
  const ingredients = [];
  for (let i = 1; i < 21; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (!name || !measure) {
      break;
    }
    ingredients.push({
      name,
      measure,
    });
  }
  return {
    id: idMeal,
    name: strMeal,
    instruction: strInstructions,
    tags: strTags ? strTags.split(",") : [],
    thumb: strMealThumb,
    area: strArea,
    category: strCategory,
    youtube: strYoutube,
    ingredients,
  };
};
const formatMeals = (meal) => meal.map((ml) => formatMeal(ml));

export const getMealById = async (id = "") => {
  if (!id) {
    return;
  }
  try {
    const { data } = await axios.get(
      // `https://www.themealdb.com/api/json/v1/1/lookup.php`,
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      // {
      //   params: {
      //     i: id,
      //   },
      // }
    );

    return formatMeal(data);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default getMealById;
