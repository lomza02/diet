import React from 'react';
import {Form as Content, ButtonWrapper, ErrorMsg} from '../Form.css';
import { Form, Field } from 'react-final-form';
import {Button, InputList} from 'components';
import API from 'data/fetch';
import { useHistory } from "react-router-dom";
import {useMutation  } from 'react-query';

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <ErrorMsg>{error}</ErrorMsg> : null
    }
  />
)

const required = value => (value ? undefined : 'Uzupełnij wartość w gramach');
const nameRequired = value => (value ? undefined : 'Wpisz nazwę produktu');
const kcalsRequired = value => (value ? undefined : 'Podaj liczbę kalorii');

const AddProductForm = () => {
const [mutate] = useMutation(API.sendProducts, {refetchQueries: ['products']});
const history = useHistory()
    const onSubmit = async(values, form) => {
      try {
        mutate(values);
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Content onSubmit={handleSubmit}>
            <InputList>
            <li>
            Nazwa produktu
              <Field 
              parse={value => value < 0 ? -value : value}
              name="name"
              component="input" 
              validate={nameRequired}
              type="text"/>
              <Error name="name" />
            </li> 
            <li>
            Kalorie na 100 g
              <Field 
              parse={value => value < 0 ? -value : value}
              name="kcals"
              component="input" 
              validate={kcalsRequired}
              type="number"/>
              <Error name="kcals" />
            </li> 
            <li>
            Białko na 100 g
              <Field 
              parse={value => value < 0 ? -value : value}
              name="proteins"
              component="input" 
              validate={required}
              type="number"/>
              <Error name="proteins" />
            </li>  
            <li>
            Węglowodany na 100 g
              <Field 
              parse={value => value < 0 ? -value : value}
              name="carbs"
              component="input" 
              validate={required}
              type="number"/>
              <Error name="carbs" />
            </li>
              <li>
              Tłuszcze na 100 g
              <Field 
              parse={value => value < 0 ? -value : value}
              name="fats"
              component="input" 
              validate={required}
              type="number"/>
              <Error name="fats" />
            </li> 
            </InputList>
            <ButtonWrapper>
              <Button type="submit">Dodaj</Button>
            </ButtonWrapper>
          </Content>
        )}
      />
     );
}
 
export default AddProductForm;