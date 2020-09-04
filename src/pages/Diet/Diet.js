import React from 'react';
import DateBar from 'pages/Diet/components/DateBar';
import PlusButton from 'components/PlusButton';
import ProductsList from 'pages/Diet/components/ProductsList';
import DateContextHandler from 'data/context/';
import ErrorBoundary from 'components/ErrorBoundary';
import Wrapper from 'components/Wrapper'

const Diet = () => {
const {DateContext} = DateContextHandler;

    return (
        <DateContext>
             <DateBar />
            <Wrapper>
            <ErrorBoundary>
                <ProductsList/>
            </ErrorBoundary>
                <PlusButton>&#10010;</PlusButton>
            </Wrapper>
            
        </DateContext>
    );
}

export default Diet;