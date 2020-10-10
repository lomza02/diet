import React, {useContext} from 'react';
import {ProductList, CheckList, Button} from 'components';
import DateContextHandler from 'data/context';
import {Form, Field} from 'react-final-form';
import {Link} from 'react-router-dom';
import {useLongPress} from 'data/hooks/useLongPress';
import { useHistory } from "react-router-dom";

const ProductsList = (props, {checklist}) => {
    const {store} = DateContextHandler;
   const data = useContext(store);
   const {groupedProductsWithDetails, products, setCheckedProducts, setSelectedMeal} = data;
  const history = useHistory()
   const onSubmit = () => {
    setCheckedProducts(props.key)
   }
const longPressProps = useLongPress({
  onLongPress: (currentTarget) => {
    const ListItemId = currentTarget.value;
    setSelectedMeal(ListItemId);
    history.push('/remove-meal');
  }
});


    return checklist ? (
      <>
    <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => 
    (
    <form onSubmit={handleSubmit}>
    <CheckList>
        {products.map(item => {
        return <Field name={item.name} type="checkbox" key={item.id}>
        {({ input, meta }) => (
            <li >{item.name} <input  {...input}/></li>
        )}
      </Field>})}
    </CheckList>
    <Link to='/amount-products'><Button type="submit">Dalej</Button></Link>
    </form>
    )}
  />
    <Link to='/add-product' style={{}}><Button>Dodaj produkt</Button></Link>
   </>
) : (
<ProductList>
    {groupedProductsWithDetails.length !== 0 ? groupedProductsWithDetails.map(item => {
    return <li key={item.id} {...longPressProps} value={item.id} >
    {item.name} 
    <div><div>{item.amount} g</div><div>{item.kcals} kcal</div></div>
    <div><div>B: {item.proteins} g</div><div>W: {item.carbs} g</div><div>T: {item.fats} g</div></div>
    </li>}): <div>Lista posiłków jest pusta...</div>}
</ProductList> 

)
}
 
export default ProductsList;