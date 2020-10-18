import React from 'react';
import { Modal, Wrapper, PlusButton } from 'components';
import {
  ActionSection,
  NavigationBar,
  ProductsList,
  ChartSection,
} from 'pages/Diet/components';
import { Form, EditProduct, EditMeal } from 'pages/Diet/components';
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
      <NavigationBar />
      <Wrapper>
        {size.width > DESKTOP_WIDTH ? <ActionSection /> : null}
        <ChartSection />
        <ProductsList />
        {size.width <= DESKTOP_WIDTH ? (
          <Link to='/choose-product'>
            <PlusButton>&#10010;</PlusButton>
          </Link>
        ) : null}
      </Wrapper>
      <Switch>
        <Route exact path='/choose-product'>
          <Modal>
            <Form />
          </Modal>
        </Route>
        <Route exact path='/add-new'>
          <Modal>
            <Form />
          </Modal>
        </Route>
        <Route exact path='/set-grams'>
          <Modal>
            <Form />
          </Modal>
        </Route>
        <Route path='/edit-meal'>
          <Modal>
            <EditProduct />
          </Modal>
        </Route>
        <Route path='/remove-meal'>
          <Modal small>
            <EditMeal />
          </Modal>
        </Route>
      </Switch>
    </>
  );
};

export default Diet;
