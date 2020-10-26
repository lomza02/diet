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
      <Wrapper>
        <Chart />
        <Meals />
        {size.width <= DESKTOP_WIDTH ? (
          <Link to='/choose-product'>
            <PlusButton>&#10010;</PlusButton>
          </Link>
        ) : null}
      </Wrapper>
      <Switch>
        <Route exact path='/choose-product'>
          <Modal>
            <Products />
          </Modal>
        </Route>

        <Route exact path='/add-new'>
          <Modal>
            <FormProduct />
          </Modal>
        </Route>

        <Route exact path='/set-grams'>
          <Modal>
            <FormAmount />
          </Modal>
        </Route>

        <Route path='/edit-meal'>
          <Modal>
            <FormEditAmount />
          </Modal>
        </Route>
        <Route path='/remove-meal'>
          <Modal small>
            <PopupEditMeal />
          </Modal>
        </Route>
      </Switch>
    </>
  );
};

export default Diet;
