import React from 'react';
import DateBar from 'pages/Diet/components/DateBar';
import PlusButton from 'components/PlusButton';
import ProductsList from 'pages/Diet/components/ProductsList';
import DateContextHandler from 'data/context/';
import ErrorBoundary from 'components/ErrorBoundary';
import Wrapper from 'components/Wrapper';
import StatsBar from 'pages/Diet/components/StatsBar';
import {Link} from 'react-router-dom';
import Modal from 'components/Modal';
import Form from 'components/Form';
import {Switch, Route} from 'react-router-dom';
import Wizard from 'components/WizardForm/WIzardForm'

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
               <Link to="/product-list"><PlusButton>&#10010;</PlusButton></Link> 
            </Wrapper>
        <Switch>
            <Route exact path="/product-list" >
                <Modal>
                <Wizard/>
                </Modal>
            </Route>
            <Route exact path="/add-product" >
                <Modal>
                    <Form/>
                </Modal>
            </Route>
            <Route exact path="/amount-products" >
                <Modal>
                <ProductsList/>
                </Modal>
            </Route>
      </Switch>
      </DateContext>
          </>
    );
}

export default Diet;