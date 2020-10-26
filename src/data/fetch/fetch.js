const fetchMeals = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_ADRESS}/meals`);
  const data = await response.json();
  return data;
};
const fetchProducts = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_ADRESS}/products`);
  const data = await response.json();
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
  };
  const response = await fetch(
    `${process.env.REACT_APP_API_ADRESS}/products/add`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

export const addMeal = async (data) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_ADRESS}/meals/add`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

export const editMeal = async (data) => {
  const { values, _id } = data;
  const response = await fetch(
    `${process.env.REACT_APP_API_ADRESS}/meals/update/${_id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }
  );
  return response.json();
};

export const removeMeal = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_ADRESS}/meals/${id}`,
    {
      method: 'DELETE',
    }
  );
  return response.json();
};

export const hideProduct = async (data) => {
  console.log(data);
  const { hidden, _id } = data;
  console.log(hidden);
  const response = await fetch(
    `${process.env.REACT_APP_API_ADRESS}/products/update/${_id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hidden }),
    }
  );
  return response.json();
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
