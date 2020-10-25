import React, { useState, useContext } from 'react';
import AddProduct from './AddProduct';
import SetGrams from './SetGrams';
import ChooseProduct from './ChooseProduct';
import { useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import API from 'data/fetch';
import DataContextHandler from 'data/context';
import { useHistory } from 'react-router-dom';

const FormProduct = () => {
  const [newProduct, setNewProduct] = useState();
  const [mutateSendProducts] = useMutation(API.sendProducts, {
    refetchQueries: ['products'],
  });
  const [mutateSendMeal] = useMutation(API.sendMeal, {
    refetchQueries: ['meals'],
  });
  const [mutateRemoveProduct] = useMutation(API.removeProduct, {
    refetchQueries: ['products'],
  });
  const { store } = DataContextHandler;
  const data = useContext(store);
  const history = useHistory();
  let location = useLocation();
  const onSubmit = (value) => {
    setNewProduct(value);
  };

  return (
    <>
      {location.pathname === '/choose-product' && (
        <ChooseProduct
          onSubmit={onSubmit}
          data={data}
          mutateRemoveProduct={mutateRemoveProduct}
          history={history}
        />
      )}
      {location.pathname === '/set-grams' && (
        <SetGrams
          activeProduct={newProduct}
          onSubmit={onSubmit}
          data={data}
          mutateSendMeal={mutateSendMeal}
          mutateRemoveProduct={mutateRemoveProduct}
          history={history}
        />
      )}
      {location.pathname === '/add-new' && (
        <AddProduct
          onSubmit={onSubmit}
          product={newProduct}
          mutate={mutateSendProducts}
          history={history}
        />
      )}
    </>
  );
};

export default FormProduct;
