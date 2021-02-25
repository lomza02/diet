import React, { useEffect, useState } from 'react';
import { Modal, Wrapper, PlusButton } from 'components';
import {
  Navigation,
  Products,
  FormProduct,
  FormAmount,
  FormEditAmount,
  Chart,
  Meals,
  PopupEditMeal,
} from 'pages/Diet/components';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useWindowSize } from 'hooks/useWindowSize';
import { DESKTOP_WIDTH } from 'utils/constants';
import { connect } from 'react-redux';
import { increase, decrease } from 'actions/meals';

const Diet = ({ meals, date }) => {
  const [filtredMeals, setFiltredMeals] = useState([]);
  useEffect(() => {
    setFiltredMeals(
      meals.filter((meal) => meal.date === date.toISOString().substring(0, 10))
    );
  }, [meals, date]);
  const size = useWindowSize();

  return (
    <>
      <Navigation
        setFiltredMeals={setFiltredMeals}
        filtredMeals={filtredMeals}
      />
      {size.width <= DESKTOP_WIDTH ? (
        <Wrapper>
          <Chart filtredMeals={filtredMeals} />
          <Meals filtredMeals={filtredMeals} />
          <Link to='/products'>
            <PlusButton>&#10010;</PlusButton>
          </Link>
        </Wrapper>
      ) : (
        <Wrapper>
          <section style={{ width: '50%' }}>
            <Chart filtredMeals={filtredMeals} />
            <Meals filtredMeals={filtredMeals} />
          </section>
          <section style={{ width: '30%' }}>
            <Products />
          </section>
        </Wrapper>
      )}

      <Switch>
        <Route exact path='/products'>
          <Modal>
            <Products />
          </Modal>
        </Route>

        <Route exact path='/form-product'>
          <Modal>
            <FormProduct />
          </Modal>
        </Route>

        <Route exact path='/form-amount'>
          <Modal>
            <FormAmount />
          </Modal>
        </Route>

        <Route path='/edit-amount'>
          <Modal>
            <FormEditAmount />
          </Modal>
        </Route>
        <Route path='/edit-meal'>
          <Modal small>
            <PopupEditMeal />
          </Modal>
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => ({
  meals: state.meals.items,
  date: state.date,
});
const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Diet);
