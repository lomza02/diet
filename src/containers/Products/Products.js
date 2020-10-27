import React, { useState, useEffect, useRef, useContext } from 'react';
import { Button, ListItem, ButtonWrapper, ItemEdit } from 'components';
import { ScrollList, SearchInput, Header } from './Products.css';
import API from '../../data/fetch';
import { useMutation } from 'react-query';
import DataContextHandler from 'data/context';
import { useHistory } from 'react-router-dom';
import { DESKTOP_WIDTH } from 'utils/constants';

const Products = () => {
  const { store } = DataContextHandler;
  const history = useHistory();
  const data = useContext(store);
  const { setNewProduct, products } = data;
  const input = useRef();
  const [filtredProducts, setFiltredProducts] = useState(products);
  const [mutate] = useMutation(API.hideProduct, {
    refetchQueries: ['products'],
  });

  useEffect(() => {
    setFiltredProducts(products);
  }, [products]);

  const handleClick = (e) => {
    e.stopPropagation();
    const id = e.target.id;
    const target = products.find((product) => product._id === id);
    setNewProduct(target);
    history.push('/set-grams');
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

  const handleHideProduct = async (e) => {
    e.stopPropagation();
    const _id = e.target.id;
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
    history.push('/add-new');
  };
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <Header>Wybierz produkt z listy lub dodaj nowy</Header>
      {!DESKTOP_WIDTH ? null : (
        <ButtonWrapper>
          <Button type='button' onClick={handleNewProduct}>
            Dodaj nowy
          </Button>
        </ButtonWrapper>
      )}
      <ButtonWrapper>
        <SearchInput
          ref={input}
          type='text'
          onChange={handleProductsFilter}
          placeholder='Wyszukaj produktu na liście'
        />
      </ButtonWrapper>
      <ScrollList>
        {filtredProducts.map((product) =>
          product.hidden ? null : (
            <ListItem onClick={handleClick} key={product._id} id={product._id}>
              <ItemEdit id={product._id} onClick={handleHideProduct}>
                ×
              </ItemEdit>
              <ItemEdit>{product.name}</ItemEdit>
            </ListItem>
          )
        )}
      </ScrollList>
      {DESKTOP_WIDTH ? null : (
        <ButtonWrapper>
          <Button type='button' onClick={handleNewProduct}>
            Dodaj nowy
          </Button>
          <Button type='button' onClick={handleGoBack}>
            Wróć
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};

export default Products;
