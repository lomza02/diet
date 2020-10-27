import React from 'react';
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
} from 'containers';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useWindowSize } from 'data/hooks/useWindowSize';
import { useArrowPress } from 'data/hooks/useArrowPress';
import { DESKTOP_WIDTH } from 'utils/constants';

const Diet = () => {
  const size = useWindowSize();
  useArrowPress();

  return (
    <>
      <Navigation />
      {size.width <= DESKTOP_WIDTH ? (
        <Wrapper>
          <Chart />
          <Meals />
          <Link to='/products'>
            <PlusButton>&#10010;</PlusButton>
          </Link>
        </Wrapper>
      ) : (
        <Wrapper>
          <section style={{ width: '50%' }}>
            <Chart />
            <Meals />
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
          <Modal small>
            <FormAmount />
          </Modal>
        </Route>

        <Route path='/edit-amount'>
          <Modal small>
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

export default Diet;
