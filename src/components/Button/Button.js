import React from 'react';
import { Button } from './Button.css'

export default ({ children, ...props }) => {
    return (
        <Button {...props}>{children}</Button>
    )
};
