import styled from 'styled-components';

export const Bar = styled.div`
display: flex;
flex-wrap: wrap;
div {
    font-size: 13px;
    width: 100%;
    text-align: center;
    margin-bottom: ${({theme})=> theme.sizes.xl}px;
    span {
        width: 33.33%;
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
`;