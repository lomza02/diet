import React from 'react';
import { ListItem } from 'components';
import { useLongPress } from 'hooks/useLongPress';
import { useHistory } from 'react-router-dom';
import { MealInfo, MealList, EditContainer } from './Meals.css';
import { TABLET_WIDTH } from 'utils/constants';
import { useWindowSize } from 'hooks/useWindowSize';
import { connect } from 'react-redux';
import { select } from 'actions/meals';

const Meals = ({ filtredMeals, select }) => {
  const size = useWindowSize();
  const history = useHistory();
  const longPressProps = useLongPress({
    onLongPress: (currentTarget) => {
      const id = currentTarget.id;
      select(id);
      history.push('/edit-meal');
    },
  });

  const handleEditRemove = (e) => {
    const id = e.target.id;
    select(id);
    history.push('/edit-meal');
  };
  return (
    <MealList>
      {filtredMeals.length !== 0 ? (
        filtredMeals.map((item) => {
          return (
            <ListItem key={item.id} {...longPressProps} id={item.id}>
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
                  <div id={item.id} onClick={handleEditRemove}>
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

const mapDispatchToProps = (dispatch) => ({
  select: (id) => dispatch(select(id)),
});

export default connect(null, mapDispatchToProps)(Meals);
