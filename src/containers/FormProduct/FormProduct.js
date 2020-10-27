import React, { useContext } from 'react';
import { Form, InputWrapper, ErrMsg, Label, Input } from 'components';
import { Button, ButtonWrapper } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import DataContextHandler from 'data/context';
import { useMutation } from 'react-query';
import API from 'data/fetch';

const schema = yup.object().shape({
  name: yup.string().max(100).required(),
  kcals: yup.number().min(0).max(100000).required(),
  proteins: yup.number().min(0).max(100).required(),
  carbs: yup.number().min(0).max(100).required(),
  fats: yup.number().min(0).max(100).required(),
});

const AddProduct = () => {
  const [mutate] = useMutation(API.addProduct, {
    refetchQueries: ['products'],
  });
  const { store } = DataContextHandler;
  const data = useContext(store);
  const { setNewProduct } = data;
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (values) => {
    setNewProduct(values);
    try {
      await mutate(values);
      history.push('/set-grams');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>Nazwa produktu</Label>
        <Input type='text' name='name' ref={register({ required: true })} />
        {errors.name && <ErrMsg>Nieprawidłowa wartość</ErrMsg>}

        <Label>Kalorie na 100 g</Label>
        <Input name='kcals' ref={register({ required: true })} />
        {errors.kcals && <ErrMsg>Nieprawidłowa wartość</ErrMsg>}

        <Label>Białko na 100 g</Label>
        <Input name='proteins' ref={register({ required: true })} />
        {errors.proteins && <ErrMsg>Nieprawidłowa wartość</ErrMsg>}

        <Label>Węglowodany na 100 g</Label>
        <Input name='carbs' ref={register({ required: true })} />
        {errors.carbs && <ErrMsg>Nieprawidłowa wartość</ErrMsg>}

        <Label>Tłuszcze na 100 g</Label>
        <Input name='fats' ref={register({ required: true })} />
        {errors.fats && <ErrMsg>Nieprawidłowa wartość</ErrMsg>}
      </InputWrapper>
      <ButtonWrapper>
        <Button type='submit'>Dalej</Button>
        <Button type='button' onClick={handleGoBack}>
          Wróć
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default AddProduct;
