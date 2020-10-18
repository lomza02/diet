import React from 'react';
import { Form, InputWrapper, ErrMsg, Label, Input } from './Form.css';
import { Button, ButtonWrapper } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().max(100).required(),
  kcals: yup.number().min(0).max(100000).required(),
  proteins: yup.number().min(0).max(100).required(),
  carbs: yup.number().min(0).max(100).required(),
  fats: yup.number().min(0).max(100).required(),
});

const AddProduct = (props) => {
  const handleGoBack = () => {
    props.history.goBack();
  };
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    props.onSubmit(values);
    props.mutate(values);
    props.history.push('/set-grams');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>Nazwa produktu</Label>
        <Input type='text' name='name' ref={register({ required: true })} />
        {errors.name && <ErrMsg>Wpisz prawidłową wartość</ErrMsg>}

        <Label>Kalorie na 100 g</Label>
        <Input type='number' name='kcals' ref={register({ required: true })} />
        {errors.kcals && <ErrMsg>Wpisz prawidłową wartość</ErrMsg>}

        <Label>Białko na 100 g</Label>
        <Input
          type='number'
          name='proteins'
          ref={register({ required: true })}
        />
        {errors.proteins && <ErrMsg>Wpisz prawidłową wartość</ErrMsg>}

        <Label>Węglowodany na 100 g</Label>
        <Input type='number' name='carbs' ref={register({ required: true })} />
        {errors.carbs && <ErrMsg>Wpisz prawidłową wartość</ErrMsg>}

        <Label>Tłuszcze na 100 g</Label>
        <Input type='number' name='fats' ref={register({ required: true })} />
        {errors.fats && <ErrMsg>Wpisz prawidłową wartość</ErrMsg>}
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
