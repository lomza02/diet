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
  return response.json();
}

export const editMeal = async(data) => {
  const {values, id} = data;
const response = await fetch(`${process.env.REACT_APP_API_ADRESS}/meals/${id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
})
return response.json();
}

export const removeMeal = async(id)=> {
  const response = await fetch(`${process.env.REACT_APP_API_ADRESS}/meals/${id}`, {
  method: 'DELETE',
})
return response.json();
}

export const removeProduct = async(id)=> {
  const response = await fetch(`${process.env.REACT_APP_API_ADRESS}/products/${id}`, {
  method: 'DELETE',
})
return response.json();
}




export default {
    fetchMeals,
    fetchProducts,
    sendProducts,
    removeProduct,
    sendMeal,
    removeMeal,
    editMeal
}