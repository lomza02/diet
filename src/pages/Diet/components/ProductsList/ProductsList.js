import React, {useContext} from 'react';
import {ProductList, CheckList} from 'components/List';
import DateContextHandler from 'data/context';
import {Form, Field} from 'react-final-form';
import {Button} from 'components/Button';
import {Link} from 'react-router-dom'


const ProductsList = ({checklist}) => {
    const {store} = DateContextHandler;
   const data = useContext(store);
   const {groupedProductsWithDetails, products, setCheckedProducts, checkedProducts} = data;

   const onSubmit = (values) => {
    setCheckedProducts(values)
    console.log(checkedProducts)
   }
    return checklist ? (
      <>
    <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
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
    {groupedProductsWithDetails.map(item => {
    return <li key={item.id}>
    {item.name} 
    <div><div>{item.amount} g</div><div>{item.kcals} kcal</div></div>
    <div><div>B: {item.proteins} g</div><div>W: {item.carbs} g</div><div>T: {item.fats} g</div></div>
    </li>})}
</ProductList> 
)
}
 
export default ProductsList;