import React from 'react';
import { ButtonWrapper } from './ButtonWrapper.css';

export default ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
