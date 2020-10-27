import React, { useContext } from 'react';
import { ListItem } from 'components';
import DataContextHandler from 'data/context';
import { useLongPress } from 'data/hooks/useLongPress';
import { useHistory } from 'react-router-dom';
import { MealInfo, MealList, EditContainer } from './Meals.css';
import { TABLET_WIDTH } from 'utils/constants';
import { useWindowSize } from 'data/hooks/useWindowSize';

const Meals = () => {
  const size = useWindowSize();
  const { store } = DataContextHandler;
  const data = useContext(store);
  const { groupedProductsWithDetails, setSelectedMeal } = data;

  const history = useHistory();

  const longPressProps = useLongPress({
    onLongPress: (currentTarget) => {
      const ListItemId = currentTarget.id;
      console.log(ListItemId);
      setSelectedMeal(ListItemId);
      history.push('/edit-meal');
    },
  });

  const handleEditRemove = (e) => {
    const ListItemId = e.target.id;
    setSelectedMeal(ListItemId);
    history.push('/edit-meal');
  };
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
              {size.width >= TABLET_WIDTH ? (
                <EditContainer link>
                  <div id={item._id} onClick={handleEditRemove}>
                    Edytuj / Usuń
                  </div>
                </EditContainer>
              ) : null}
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
