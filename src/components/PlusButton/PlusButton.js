import React from 'react';
import { PlusButton }  from './PlusButton.css'

export default ({ children, ...props }) => {
    return (
        <PlusButton {...props}>{children}</PlusButton>
    )
}

