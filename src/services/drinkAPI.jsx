const DRINK_BY_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

async function fetchDrinkById(id) {
  const fetchURL = await fetch(`${DRINK_BY_ID}${id}`);
  const data = await fetchURL.json();
  return data;
}

export default fetchDrinkById;
