const fetchMeals = async() => {
    const response = await fetch(`${process.env.REACT_APP_API_ADRESS}/meals`);
    const data = await response.json();
    return data
}
const fetchProducts = async() => {
    const response = await fetch(`${process.env.REACT_APP_API_ADRESS}/products`);
    const data = await response.json();
    return data
}

const sendProducts = async(values) => {
    const kcal = parseFloat(values.kcal);
    const fat = parseFloat(values.fat);
    const carbs = parseFloat(values.carbs);
    const protein = parseFloat(values.protein);
    const data = {
      carbs: parseFloat(carbs.toFixed(2)),
      fat: parseFloat(fat.toFixed(2)),
      kcal: parseFloat(kcal.toFixed(2)),
      name: values.name,
      protein: parseFloat(protein.toFixed(2)),
    };
    const response = await fetch(`${process.env.REACT_APP_API_ADRESS}/products`, {
      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    });
    return response.json()
}

export const sendMeal = async(data) => {
  const response = await fetch(`${process.env.REACT_APP_API_ADRESS}/meals`, {
    method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  });
  return response.json()
}



export default {
    fetchMeals,
    fetchProducts,
    sendProducts,
    sendMeal
}