import React, { useState, useEffect, useRef } from 'react';
import { Button, ListItem, ButtonWrapper, ItemEdit } from 'components';
import { ScrollList, SearchInput, Header } from './Products.css';
import { connect } from 'react-redux';
import { remove, select } from 'actions/products';
import { useHistory } from 'react-router-dom';
import { DESKTOP_WIDTH } from 'utils/constants';

const Products = ({ products, remove, select }) => {
  const history = useHistory();
  const input = useRef();
  const [filtredProducts, setFiltredProducts] = useState([]);

  useEffect(() => {
    setFiltredProducts(products);
  }, [products]);

  const handleClick = (e) => {
    e.stopPropagation();
    const id = e.target.id;
    select(id);
    history.push('/form-amount');
  };

  const handleProductsFilter = () => {
    const inputValue = input.current.value.toLowerCase();
    const filtredProductsArray = products.filter((product) => {
      const productToLowerCase = product.name.toLowerCase();
      return productToLowerCase.includes(inputValue);
    });
    setFiltredProducts(filtredProductsArray);
  };

  const handleRemoveProduct = (e) => {
    e.stopPropagation();
    const id = e.target.id;
    remove(id);
  };

  const handleNewProduct = () => {
    history.push('/form-product');
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
            <ListItem onClick={handleClick} key={product.id} id={product.id}>
              <ItemEdit id={product.id} onClick={handleRemoveProduct}>
                ×
              </ItemEdit>
              <ItemEdit id={product.id}>{product.name}</ItemEdit>
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
const mapStateToProps = (state) => ({
  products: state.products.items,
});
const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(remove(id)),
  select: (id) => dispatch(select(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
