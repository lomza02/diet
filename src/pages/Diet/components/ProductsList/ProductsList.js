import React, {useCallback, useContext} from 'react';
import {useQuery} from 'react-query';
import API from 'data/fetch';
import {groupBy} from 'utils/groupBy';
import {List} from './ProductsList.css'
import DateContextHandler from 'data/context';


const ProductsList = () => {
    const {store} = DateContextHandler;
   const date = useContext(store);
   const activeDate = date.date.toISOString().substring(0,10);
    const { data: meals, isLoading: isLoadingMeals, error: errorMeals } = useQuery("meals", API.fetchMeals
    )
    const { data: products, isLoading: isLoadingProducts, error: errorProducts } = useQuery("products", API.fetchProducts
  )
  
  const idDataLoaded = useCallback(!!meals && !!products, [meals, products]);
const grupedMeals = idDataLoaded ? groupBy(meals, meal => meal.date).get(activeDate) : "brak";
// console.log(grupedMeals.map(meal => products.find(product => product.id === meal.productId)))


    return idDataLoaded ? (
        grupedMeals ? 
    <List>
        {grupedMeals.map(meal => {
            const product = products.find(product => product.id === meal.productId);
        return <li>
        {product.name} 
        <div><div>{meal.amount}g</div><div>{product.kcal * meal.amount/100}kcal</div></div>
        <div><div>B: {product.protein * meal.amount/100}g</div><div>W: {product.carbs* meal.amount/100}g</div><div>T: {product.fat* meal.amount/100}g</div></div>
        </li>})}
    </List> 
    : 
    <div>Brak produktów na liście.</div>
     
     ) : (
         <div>
Loading...
         </div>
     )
}
 
export default ProductsList;