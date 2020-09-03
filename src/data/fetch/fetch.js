

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


export default {
    fetchMeals,
    fetchProducts
}