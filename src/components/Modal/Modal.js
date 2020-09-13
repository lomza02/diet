import React from 'react'
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {Background, Modal as Content, SmallModal} from './Modal.css';

const Modal = (props) => {
    const history = useHistory()
    const handlePreviousPage = () => {
        history.goBack()
    }
    return props.small ? ReactDOM.createPortal(
        <Background 
        onClick={handlePreviousPage}
        >
        <SmallModal
        onClick={e => e.stopPropagation()}
        >
                <div><span onClick={handlePreviousPage}>&times;</span></div>
                <div>
                    {props.children}
                </div>
        </SmallModal>
        </Background>, document.querySelector('#modal')
    ) : ReactDOM.createPortal(
        <Background 
        onClick={handlePreviousPage}
        >
        <Content
        onClick={e => e.stopPropagation()}
        >
                <div><span onClick={handlePreviousPage}>&times;</span></div>
                <div>
                    {props.children}
                </div>
        </Content>
        </Background>, document.querySelector('#modal')
    )
}

export default Modal;