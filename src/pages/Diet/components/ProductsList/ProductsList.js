import React, {useContext, useMemo} from 'react';
import {useQuery} from 'react-query';
import API from 'data/fetch';
import {groupBy} from 'utils/groupBy';
import {List} from './ProductsList.css';
import DateContextHandler from 'data/context';
import {getGroupedProductsWithDetails, getTotalDailyValues} from 'utils/getGruppedProducts';


const ProductsList = () => {
    const {store} = DateContextHandler;
   const date = useContext(store);
   const activeDate = useMemo(()=>date.date.toISOString().substring(0,10), [date]);
   const { data: meals} = useQuery("meals", API.fetchMeals)
   const { data: products } = useQuery("products", API.fetchProducts);
   const grupedMeals =  useMemo(()=>groupBy(meals, meal => meal.date).get(activeDate),[activeDate,meals]);

   const groupedProductsWithDetails = getGroupedProductsWithDetails(grupedMeals, products);
    const total = getTotalDailyValues(groupedProductsWithDetails);

    return (
        <>
    {/* <div>{total.kcals} / 2000 kcal <div>B: {total.proteins}g W: {total.carbs}g T: {total.fats}g</div></div> */}
    <List>
        {groupedProductsWithDetails.map(item => {
        return <li key={item.id}>
        {item.name} 
        <div><div>{item.amount}g</div><div>{item.kcals}kcal</div></div>
        <div><div>B: {item.proteins}g</div><div>W: {item.carbs}g</div><div>T: {item.fats}g</div></div>
        </li>})}
    </List> 
        </>
    )

}
 
export default ProductsList;