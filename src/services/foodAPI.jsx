const FOOD_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

async function fetchFoodById(id) {
  const fetchURL = await fetch(`${FOOD_BY_ID}${id}`);
  const data = await fetchURL.json();
  return data;
}

export default fetchFoodById;
