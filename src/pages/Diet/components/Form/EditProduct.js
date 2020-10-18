import React, { useContext } from 'react';
import { Form, InputWrapper, ErrMsg, Label, Input } from './Form.css';
import { Button, ButtonWrapper } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import API from 'data/fetch';
import DataContextHandler from 'data/context/';

const schema = yup.object().shape({
  amount: yup.number().positive().required(),
});

const EditProduct = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { store } = DataContextHandler;
  const data = useContext(store);
  const { selectedMeal } = data;
  const [mutate] = useMutation(API.editMeal, {
    refetchQueries: ['meals'],
  });
  const history = useHistory();
  const onSubmit = async (values) => {
    try {
      await mutate({ values, id: selectedMeal });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label>Wpisz wagę w gramach</Label>
          <Input name='amount' ref={register({ required: true })} />
          {errors.amount && <ErrMsg>Wpisz wartość</ErrMsg>}
        </InputWrapper>
        <ButtonWrapper>
          <Button type='submit'>Zapisz</Button>
          <Button onClick={handleGoBack}>Wróć</Button>
        </ButtonWrapper>
      </Form>
    </>
  );
};

export default EditProduct;
