import React, { useState } from 'react';
import { Button, ListItem, ButtonWrapper } from 'components';
import { ScrollList, SearchInput } from './Form.css';

const ChooseProduct = (props) => {
  const { products } = props.data;
  const [filtredProducts, setFiltredProducts] = useState(products);

  const handleClick = (event) => {
    const id = event.target.id;
    const target = products.find((product) => product.id === parseInt(id));
    props.onSubmit(target);
    props.history.push('/set-grams');
  };

  const handleProductsFilter = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filtredProductsArray = products.filter((product) => {
      const productToLowerCase = product.name.toLowerCase();
      return productToLowerCase.includes(inputValue);
    });
    setFiltredProducts(filtredProductsArray);
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
        {filtredProducts.map((product) => (
          <ListItem onClick={handleClick} key={product.id} id={product.id}>
            {product.name}
          </ListItem>
        ))}
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
