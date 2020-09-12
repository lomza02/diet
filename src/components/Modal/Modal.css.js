import styled from 'styled-components';


export const Background = styled.div`
position: fixed;
width: 100%;
min-height: 100vh;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.8);
color: black;
font-size: 16px;
`

export const Modal = styled.div`
position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 100vh;
    background-color: white;
    color: black;
    font-size: 20px;
    span {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-right: ${({theme})=> theme.sizes.sm}px;
        margin-top: ${({theme})=> theme.sizes.xs}px;
        font-size: 25px;

    }

`