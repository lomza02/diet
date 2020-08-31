import React, { Fragment } from 'react'
import DietBar from 'pages/Diet/components/DietBar'
import Button from 'components/Button'

const Diet = () => {
    return (
        <Fragment>
            <DietBar />
            <div style={{ height: '200vh' }}>
                <Button>&#10010;</Button>
            </div>
        </Fragment>
    );
}

export default Diet;