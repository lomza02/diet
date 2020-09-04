import React from 'react';
import DateBar from 'pages/Diet/components/DateBar';
import Button from 'components/Button';
import ProductsList from 'pages/Diet/components/ProductsList'
import DateContextHandler from 'data/context/'

const Diet = () => {
const {DateContext} = DateContextHandler;

    return (
        <DateContext>
            <DateBar />
            <div style={{ height: '200vh' }}>
            <ProductsList/>
                <Button>&#10010;</Button>
            </div>
        </DateContext>
    );
}

export default Diet;