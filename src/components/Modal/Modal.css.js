import styled from 'styled-components';
import { device } from 'utils/device'; 

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
    div {    
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: flex-start;
        span {
        margin-right: ${({theme})=> theme.sizes.sm}px;
        margin-top: ${({theme})=> theme.sizes.xs}px;
        font-size: 25px;
        cursor: pointer;
        }
    }
    @media ${device.tablet} {
        top: 50vh;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: auto;
  }
`

export const SmallModal = styled(Modal)`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 30vh;
`