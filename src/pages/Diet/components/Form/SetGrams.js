import React, { useEffect } from 'react';
import { Form, ErrMsg, Label, Input, InputWrapper } from './Form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, ButtonWrapper } from 'components';

const schema = yup.object().shape({
  amount: yup.number().positive().required(),
});

const SetGrams = (props) => {
  const { products, dateISO } = props.data;
  const handleGoBack = () => {
    props.history.goBack();
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (values) => {
    const lastAddedProduct = products[products.length - 1];
    const meal = props.activeProduct._id
      ? {
          ...values,
          productId: props.activeProduct._id,
          date: dateISO,
        }
      : {
          ...values,
          productId: lastAddedProduct._id,
          date: dateISO,
        };
    try {
      await props.mutateSendMeal(meal);
      props.onSubmit(null);
      props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      const lastProductId = products[products.length - 1]._id;
      if (props.history.location.pathname === '/add-new')
        props.mutateRemoveProduct(lastProductId);
    };
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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

export default SetGrams;
