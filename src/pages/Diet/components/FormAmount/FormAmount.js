import React from 'react';
import { Form, ErrMsg, Label, Input, InputWrapper } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, ButtonWrapper } from 'components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { select } from 'actions/products';
import { add } from 'actions/meals';

const schema = yup.object().shape({
  amount: yup.number().positive().required(),
});
const FormAmount = ({ select, selected, products, add, date }) => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    add(selected, data.amount, products, date);
    select(null);
    history.push('/');
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

const mapDispatchToProps = (dispatch) => ({
  select: (id) => dispatch(select(id)),
  add: (id, amount, products, date) =>
    dispatch(add(id, amount, products, date)),
});

const mapStateToProps = (state) => ({
  selected: state.products.selected,
  products: state.products.items,
  date: state.date,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAmount);
