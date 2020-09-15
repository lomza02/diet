import React, {useContext}  from 'react';
import DateContextHandler from 'data/context';
import {CheckList, InputList} from 'components';
import { Field } from 'react-final-form';
import Wizard from './Wizard'
import API from 'data/fetch';
import { useHistory } from "react-router-dom";
import {useMutation  } from 'react-query';
import {ErrorMsg} from '../Form.css';
import {STRING_PROVIDER} from 'utils/constants';


const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <ErrorMsg>{error}</ErrorMsg> : null
    }
  />
)

const required = value => (value ? undefined : 'Uzupełnij wagę w gramach');

export default () => {
  const history = useHistory()
  const {store} = DateContextHandler;
  const data = useContext(store);
  const {products, checkedProducts} = data;
  const [mutate] = useMutation(API.sendMeal, { refetchQueries: ['meals']})

  const onSubmit = async values => {
    values.forEach( async (value) => {
      if(parseFloat(value.amount) <= 0) return;
      try {
        await mutate(value)
        history.push('/choose-action');
      } catch(error) {
      }
    })
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
      initialValues={{work: 'lasdasdrry'}}
      onSubmit={onSubmit}
      >
      <Wizard.Page>
          <CheckList>
            {products.map(item => {
              return <Field 
              name="products" 
              type="checkbox" 
              key={item.id} 
              value={item.id}>
                {({ input, meta }) => (
                  <li >{item.name} <input  {...input}/></li>
                )}
              </Field>})}
          </CheckList>
        </Wizard.Page>
        <Wizard.Page>
        <div style={{textAlign: 'center', marginTop: '5px'}}>Wpisz wagę produktów w gramach (g)</div>
        <InputList>
          {checked.map(item => 
            <li key={item.id}>{item.name}
              <Field 
              parse={value => value < 0 ? -value : value}
              name={item.name + STRING_PROVIDER}
              component="input" 
              key={item.id} 
              validate={required} 
              type="number"/>
              <Error name={item.name + STRING_PROVIDER}/>
            </li>)}
        </InputList>
        </Wizard.Page>
      </Wizard>
    </>
  );
}
