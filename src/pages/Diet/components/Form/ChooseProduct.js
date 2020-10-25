import React, { useState, useEffect } from 'react';
import { Button, ListItem, ButtonWrapper, ItemEdit } from 'components';
import { ScrollList, SearchInput } from './Form.css';
import API from '../../../../data/fetch';
import { useMutation } from 'react-query';

const ChooseProduct = (props) => {
  const { products } = props.data;
  const [filtredProducts, setFiltredProducts] = useState(products);
  const [mutate] = useMutation(API.hiddenProduct, {
    refetchQueries: ['products'],
  });

  useEffect(() => {
    setFiltredProducts(products);
  }, [products]);

  const handleClick = (event) => {
    const id = event.target.id;
    const target = products.find((product) => product._id === id);
    props.onSubmit(target);
    props.history.push('/set-grams');
  };
  const handleProductsFilter = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filtredProductsArray = products.filter((product) => {
      const productToLowerCase = product.name.toLowerCase();
      return (
        productToLowerCase.includes(inputValue) && product.hidden === false
      );
    });
    setFiltredProducts(filtredProductsArray);
  };

  const handleHiddenProduct = async (e) => {
    e.stopPropagation();
    const _id = e.target.parentNode.id;
    const payload = {
      _id,
      hidden: true,
    };
    try {
      await mutate(payload);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewProduct = () => {
    props.history.push('/add-new');
  };
  const handleGoBack = () => {
    props.history.goBack();
  };
  return (
    <>
      <ButtonWrapper>
        <SearchInput type='text' onChange={handleProductsFilter} />
      </ButtonWrapper>
      <ScrollList>
        {filtredProducts.map((product) =>
          product.hidden ? null : (
            <ListItem onClick={handleClick} key={product._id} id={product._id}>
              <ItemEdit onClick={handleHiddenProduct}>×</ItemEdit>
              <span>{product.name}</span>
            </ListItem>
          )
        )}
      </ScrollList>
      <ButtonWrapper>
        <Button type='button' onClick={handleNewProduct}>
          Dodaj nowy
        </Button>
        <Button type='button' onClick={handleGoBack}>
          Wróć
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default ChooseProduct;
