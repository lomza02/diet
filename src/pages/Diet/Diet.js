import React from 'react';
import { Button, Modal, Wrapper, ErrorBoundary, PlusButton } from 'components';
import {DateBar, StatsBar, ProductsList, ProductForm, MealForm} from 'pages/Diet/components';
import DateContextHandler from 'data/context/';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

const Diet = () => {
const {DateContext} = DateContextHandler;

    return (
        <>
        <DateContext>
             <DateBar />
            <Wrapper>
            <StatsBar/>
            <ErrorBoundary>
                <ProductsList />
            </ErrorBoundary>
               <Link to="/choose-action"><PlusButton>&#10010;</PlusButton></Link> 
            </Wrapper>
        <Switch>
            <Route exact path="/add-meal" >
                <Modal>
                    <MealForm/>
                </Modal>
            </Route>
            <Route path="/add-product" >
                <Modal>
                    <ProductForm/>
                </Modal>
            </Route>
            <Route path="/choose-action" >
                <Modal small>
                <Link to="/add-product"><Button>Dodaj produkt</Button></Link> 
                <Link to="/add-meal"><Button>Dodaj posiłek</Button></Link>
                </Modal>
            </Route>
      </Switch>
      </DateContext>
          </>
    );
}

export default Diet;