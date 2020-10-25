import React, { useState, useEffect, useRef } from 'react';
import { Button, ListItem, ButtonWrapper, ItemEdit } from 'components';
import { ScrollList, SearchInput } from './Form.css';
import API from '../../../../data/fetch';
import { useMutation } from 'react-query';

const ChooseProduct = (props) => {
  const list = useRef();
  const input = useRef();
  const { products } = props.data;
  const [filtredProducts, setFiltredProducts] = useState(products);
  const [mutate] = useMutation(API.hiddenProduct, {
    refetchQueries: ['products'],
  });
  useEffect(() => {
    setFiltredProducts(products);
  }, [products]);

  const handleClick = () => {
    const id = list.current.id;
    console.log(id);
    const target = products.find((product) => product._id === id);
    props.onSubmit(target);
    props.history.push('/set-grams');
  };

  const handleProductsFilter = () => {
    const inputValue = input.current.value.toLowerCase();
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
    const _id = list.current.id;
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
            <ListItem
              onClick={handleClick}
              key={product._id}
              id={product._id}
              ref={list}
            >
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
