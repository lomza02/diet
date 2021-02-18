import uuid from 'uuid-random';
const fetchMeals = () => {
  const data = JSON.parse(localStorage.meals);
  // console.log('meals', data);
  return data;
};
const fetchProducts = () => {
  const data = JSON.parse(localStorage.products);
  // console.log('products', data);

  return data;
};

const addProduct = async (values) => {
  const kcals = parseFloat(values.kcals);
  const fats = parseFloat(values.fats);
  const carbs = parseFloat(values.carbs);
  const proteins = parseFloat(values.proteins);
  const data = {
    carbs: parseFloat(carbs.toFixed(2)),
    fats: parseFloat(fats.toFixed(2)),
    kcals: parseFloat(kcals.toFixed(2)),
    name: values.name,
    proteins: parseFloat(proteins.toFixed(2)),
    hidden: false,
    _id: uuid(),
  };
  const products = JSON.parse(localStorage.products);
  products.push(data);
  localStorage.setItem('products', JSON.stringify(products));
  return true;
};

export const addMeal = async (data) => {
  data._id = uuid();
  const meals = JSON.parse(localStorage.meals);
  meals.push(data);
  localStorage.setItem('meals', JSON.stringify(meals));
  return true;
};

export const editMeal = async (data) => {
  const { values, _id } = data;
  const meals = JSON.parse(localStorage.meals);
  const meal = meals.find((meal) => meal._id === _id);
  meal.amount = values.amount;
  localStorage.setItem('meals', JSON.stringify(meals));
  return true;
};

export const removeMeal = async (id) => {
  const meals = JSON.parse(localStorage.meals);
  const meal = meals.find((meal) => meal._id === id);
  const index = meals.indexOf(meal);
  if (index > -1) {
    meals.splice(index, 1);
  }
  localStorage.setItem('meals', JSON.stringify(meals));
  return true;
};

export const hideProduct = async (data) => {
  const { _id } = data;
  const products = JSON.parse(localStorage.products);
  const product = products.find((product) => product._id === _id);
  product.hidden = true;
  localStorage.setItem('products', JSON.stringify(products));
  return true;
};

export default {
  fetchMeals,
  fetchProducts,
  addProduct,
  hideProduct,
  addMeal,
  removeMeal,
  editMeal,
};
