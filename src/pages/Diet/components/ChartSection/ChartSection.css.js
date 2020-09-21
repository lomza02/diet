import styled from 'styled-components';
import {device} from 'utils/device';

export const Bar = styled.div`
display: flex;
flex-wrap: wrap;
div {
    font-size: 13px;
    width: 100%;
    text-align: center;
    margin-bottom: ${({theme})=> theme.sizes.xl}px;
    span {
       font-size: 12px;
    }
    span:nth-child(1) {
       margin: 5px; 
       border-bottom: 10px solid ${({theme})=> theme.colors.primary.normal};
    }
    span:nth-child(2) {
       margin: 5px; 
       border-bottom: 10px solid ${({theme})=> theme.colors.accent.normal};
    }
    span:nth-child(3) {
       margin: 5px; 
       border-bottom: 10px solid ${({theme})=> theme.colors.accent.second};
    }
}
`

export const  Wrapper = styled.div`
display: flex;
justify-content: center;
@media ${device.tablet} {
   div {
   width: 500px;
}
}


`