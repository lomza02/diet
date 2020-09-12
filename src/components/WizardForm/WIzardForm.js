/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useContext}  from 'react'
import DateContextHandler from 'data/context';
import {CheckList, InputList} from 'components/List';
import { Field } from 'react-final-form'
import Wizard from './Wizard'
import API from 'data/fetch'
import { useHistory } from "react-router-dom";




const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Uzupełnij wagę w gramach')

const Form = () => {
  const history = useHistory()
  const {store} = DateContextHandler;
  const data = useContext(store);
  const {products, checkedProducts} = data;
  const onSubmit = async values => {
    values.forEach(value => {
      API.sendMeal(value)
    })
    history.push('/')
  }

const getProductsById = (checkedProducts) => {
  if(!checkedProducts.products) return
  const checked = checkedProducts.products.map(checked => products.find(product => product.id === checked));
  return checked;
}
const checked = getProductsById(checkedProducts) || [];
    return (
      <>
        <Wizard
          initialValues={{}}
          onSubmit={onSubmit}
        >
        <Wizard.Page>
        <CheckList>
        {products.map(item => {
        return <Field name="products" type="checkbox" key={item.id} value={item.id}>
        {({ input, meta }) => (
            <li >{item.name} <input  {...input}/></li>
        )}
            </Field>})}
        </CheckList>
        </Wizard.Page>
        
        <Wizard.Page>
          <div style={{textAlign: 'center', marginTop: '5px'}}>Wpisz wagę produktów w gramach (g)</div>
            <InputList>
        {checked.map(item => <li key={item.id}>{item.name} <Field name={item.name} component="input" key={item.id} validate={required} type="number"/>
        <Error name={item.name} />
        </li>)}
            </InputList>
        </Wizard.Page>

          </Wizard>
        </>
      )
}



export default Form
