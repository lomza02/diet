import React, {useContext} from 'react';
import {ButtonWrapper, ErrorMsg, FormWrapper} from '../Form.css';
import { Form, Field } from 'react-final-form';
import {Button, InputList } from 'components';
import API from 'data/fetch';
import { useHistory } from "react-router-dom";
import {useMutation  } from 'react-query';
import DateContextHandler from 'data/context';

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <ErrorMsg>{error}</ErrorMsg> : null
    }
  />
)

const required = value => (value ? undefined : 'Wpisz wartość');

const EditMealForm = () => {
  const {store} = DateContextHandler;
  const data = useContext(store);
  const {selectedMeal} = data;
  const [mutate] = useMutation(API.editMeal, {
    refetchQueries: ['meals']
  });
const history = useHistory()
    const onSubmit = async(values) => {
      try {
        await mutate({values, id: selectedMeal})
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <FormWrapper onSubmit={handleSubmit}>
          <>
        <div style={{textAlign: 'center', marginTop: '5px'}}>Wpisz wagę w gramach (g)</div>
        <InputList>
        <li>
        <Field 
              parse={value => value < 0 ? parseFloat(-value) : parseFloat(value)}
              name='amount'
              component="input" 
              validate={required} 
              type="number"/>
              <Error name="amount"/>
        </li>
        </InputList>

          </>
            <ButtonWrapper>
              <Button type="submit">Zapisz</Button>
            </ButtonWrapper>
          </FormWrapper>
        )}
      />
     );
}
 
export default EditMealForm;