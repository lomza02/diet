import React, { useCallback } from 'react';
import { Button } from 'components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { remove, select } from 'actions/meals';

const PopupEditMeal = ({ remove, selected, select }) => {
  const history = useHistory();

  const handleRemoveMeal = useCallback(() => {
    remove(selected);
    history.push('/');
    select(null);
  }, [history, remove, selected, select]);
  const handleEditMeal = () => {
    history.push('/edit-amount');
  };
  return (
    <>
      <Button red onClick={handleRemoveMeal}>
        Usuń
      </Button>
      <Button onClick={handleEditMeal}>Edytuj</Button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(remove(id)),
  select: (id) => dispatch(select(id)),
});

const mapStateToProps = (state) => ({
  selected: state.meals.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupEditMeal);
