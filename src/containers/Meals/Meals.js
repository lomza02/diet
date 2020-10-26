import React, { useContext } from 'react';
import { ListItem } from 'components';
import DataContextHandler from 'data/context';
import { useLongPress } from 'data/hooks/useLongPress';
import { useHistory } from 'react-router-dom';
import { MealInfo, MealList } from './Meals.css';

const Meals = () => {
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
    <MealList>
      {groupedProductsWithDetails.length !== 0 ? (
        groupedProductsWithDetails.map((item) => {
          return (
            <ListItem key={item._id} {...longPressProps} id={item._id}>
              {item.name}
              <MealInfo>
                <div>{item.amount} g</div>
                <div>{item.kcals} kcal</div>
              </MealInfo>
              <MealInfo>
                <div>B: {item.proteins} g</div>
                <div>W: {item.carbs} g</div>
                <div>T: {item.fats} g</div>
              </MealInfo>
            </ListItem>
          );
        })
      ) : (
        <div>Dodaj posiłki do listy...</div>
      )}
    </MealList>
  );
};

export default Meals;
