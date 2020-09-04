import React, {useContext} from 'react';
import {useQuery} from 'react-query';
import API from 'data/fetch';
import {groupBy} from 'utils/groupBy';
import {List} from './ProductsList.css';
import DateContextHandler from 'data/context';


const ProductsList = () => {
    const {store} = DateContextHandler;
   const date = useContext(store);
   const activeDate = date.date.toISOString().substring(0,10);
    const { data: meals} = useQuery("meals", API.fetchMeals
    )
    const { data: products } = useQuery("products", API.fetchProducts
  );
const grupedMeals =  groupBy(meals, meal => meal.date).get(activeDate);

    return grupedMeals ? (
    <List>
        {grupedMeals.map(meal => {
            const product = products.find(product => product.id === meal.productId);
        return <li key={meal.id}>
        {product.name} 
        <div><div>{meal.amount}g</div><div>{product.kcal * meal.amount/100}kcal</div></div>
        <div><div>B: {product.protein * meal.amount/100}g</div><div>W: {product.carbs* meal.amount/100}g</div><div>T: {product.fat* meal.amount/100}g</div></div>
        </li>})}
    </List>  
     ) : (
         <div style={{textAlign: 'center'}}>Brak produktów na liście</div>
     )
}
 
export default ProductsList;