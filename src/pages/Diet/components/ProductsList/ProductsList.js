import React, {useContext, useMemo} from 'react';

import {List} from './ProductsList.css';
import DateContextHandler from 'data/context';



const ProductsList = () => {
    const {store} = DateContextHandler;
   const data = useContext(store);
   const {groupedProductsWithDetails} = data;

    return (
    <List>
        {groupedProductsWithDetails.map(item => {
        return <li key={item.id}>
        {item.name} 
        <div><div>{item.amount}g</div><div>{item.kcals}kcal</div></div>
        <div><div>B: {item.proteins}g</div><div>W: {item.carbs}g</div><div>T: {item.fats}g</div></div>
        </li>})}
    </List> 
    )

}
 
export default ProductsList;