import React from 'react';
import { AddButton } from './Button.css'

const Button = ({ children }) => {

    return (
        <AddButton>{children}</AddButton>
    )
}


export default Button