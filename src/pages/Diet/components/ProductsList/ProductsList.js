import React, { useContext } from 'react';
import { ListItem } from 'components';
import DataContextHandler from 'data/context';
import { useLongPress } from 'data/hooks/useLongPress';
import { useHistory } from 'react-router-dom';
import { ProductInfo, ProductList } from './ProductsList.css';

const ProductsList = () => {
  const { store } = DataContextHandler;
  const data = useContext(store);
  const { groupedProductsWithDetails, setSelectedMeal } = data;
  const history = useHistory();

  const longPressProps = useLongPress({
    onLongPress: (currentTarget) => {
      const ListItemId = currentTarget.id;
      setSelectedMeal(ListItemId);
      history.push('/remove-meal');
    },
  });

  return (
    <ProductList>
      {groupedProductsWithDetails.length !== 0 ? (
        groupedProductsWithDetails.map((item) => {
          return (
            <ListItem key={item._id} {...longPressProps} id={item._id}>
              {item.name}
              <ProductInfo>
                <div>{item.amount} g</div>
                <div>{item.kcals} kcal</div>
              </ProductInfo>
              <ProductInfo>
                <div>B: {item.proteins} g</div>
                <div>W: {item.carbs} g</div>
                <div>T: {item.fats} g</div>
              </ProductInfo>
            </ListItem>
          );
        })
      ) : (
        <div>Lista posiłków jest pusta...</div>
      )}
    </ProductList>
  );
};

export default ProductsList;
