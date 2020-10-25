import React, { useContext, useCallback } from 'react';
import { Button, ButtonWrapper } from 'components';
import { useHistory } from 'react-router-dom';
import DataContextHandler from 'data/context';
import { useMutation } from 'react-query';
import API from 'data/fetch';

const EditMeal = () => {
  const history = useHistory();
  const { store } = DataContextHandler;
  const data = useContext(store);
  const { selectedMeal } = data;
  const [mutate] = useMutation(API.removeMeal, {
    refetchQueries: ['meals'],
  });
  const handleRemoveMeal = useCallback(async () => {
    try {
      await mutate(selectedMeal);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }, [selectedMeal, mutate, history]);
  const handleEditMeal = () => {
    history.push('/edit-meal');
  };
  return (
    <>
      <Button red onClick={handleRemoveMeal}>
        Usuń
      </Button>
      <Button onClick={handleEditMeal}>Edytuj</Button>
    </>
  );
};

export default EditMeal;
