import React from 'react';
import { Form, InputWrapper, ErrMsg, Label, Input } from 'components';
import { Button, ButtonWrapper } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { edit } from 'actions/meals';

const schema = yup.object().shape({
  amount: yup.number().positive().required(),
});

const FormEditAmount = ({ edit, selected, meals }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const onSubmit = (data) => {
    edit(selected, data.amount, meals);
    history.push('/');
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
const mapDispatchToProps = (dispatch) => ({
  edit: (id, amount, products) => dispatch(edit(id, amount, products)),
});
const mapStateToProps = (state) => ({
  selected: state.meals.selected,
  meals: state.meals.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormEditAmount);
