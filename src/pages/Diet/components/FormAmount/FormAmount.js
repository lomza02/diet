import React, { useContext } from 'react';
import { Form, ErrMsg, Label, Input, InputWrapper } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, ButtonWrapper } from 'components';
import DataContextHandler from 'data/context';
import { useMutation } from 'react-query';
import API from 'data/fetch';
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
  amount: yup.number().positive().required(),
});
const FormAmount = () => {
  const [mutate] = useMutation(API.addMeal, {
    refetchQueries: ['meals'],
  });
  const history = useHistory();
  const { store } = DataContextHandler;
  const data = useContext(store);
  const { newProduct, products, dateISO, setNewProduct } = data;

  const handleGoBack = () => {
    history.goBack();
  };
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (values) => {
    const lastAddedProduct = products[products.length - 1];
    const meal = newProduct._id
      ? {
          ...values,
          productId: newProduct._id,
          date: dateISO,
        }
      : {
          ...values,
          productId: lastAddedProduct._id,
          date: dateISO,
        };
    try {
      await mutate(meal);
      setNewProduct(null);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h5>Dodaj posiłek</h5>
      <InputWrapper>
        <Label>Waga w gramach</Label>
        <Input name='amount' ref={register({ required: true })} />
        {errors.amount && <ErrMsg>Wpisz wartość</ErrMsg>}
      </InputWrapper>
      <ButtonWrapper>
        <Button type='submit'>Dodaj</Button>
        <Button type='button' onClick={handleGoBack}>
          Wróć
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default FormAmount;
