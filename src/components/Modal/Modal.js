import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import {
  Background,
  Modal,
  SmallModal,
  CloseSection,
  Content,
} from './Modal.css';

export default (props) => {
  const history = useHistory();
  const handleMainPage = () => {
    history.push('/');
  };
  return props.small
    ? ReactDOM.createPortal(
        <Background>
          <SmallModal onClick={(e) => e.stopPropagation()}>
            <CloseSection>
              <span onClick={handleMainPage}>&times;</span>
            </CloseSection>
            <Content>{props.children}</Content>
          </SmallModal>
        </Background>,
        document.querySelector('#modal')
      )
    : ReactDOM.createPortal(
        <Background onClick={handleMainPage}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CloseSection>
              <span onClick={handleMainPage}>&times;</span>
            </CloseSection>
            <Content>{props.children}</Content>
          </Modal>
        </Background>,
        document.querySelector('#modal')
      );
};
