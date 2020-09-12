import React from 'react'
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {Background, Modal as Content} from './Modal.css';

const Modal = (props) => {
    const history = useHistory()
    const handlePreviousPage = () => {
        history.goBack()
    }
    return ReactDOM.createPortal(
        <Background 
        onClick={handlePreviousPage}
        >
        <Content
        onClick={e => e.stopPropagation()}
        >
                <span onClick={handlePreviousPage}>&times;</span>
                <div>
                    {props.children}
                </div>
        </Content>
        </Background>, document.querySelector('#modal')
    )
}

export default Modal;