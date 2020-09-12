import styled from 'styled-components';


export const Button = styled.button`
display: flex;
justify-content: flex-end;
align-items: center;
height: 30px;
font-size: 16px;
padding: ${({theme})=> theme.sizes.xl}px ${({theme})=> theme.sizes.xl}px;
background-color: ${props => props.theme.colors.accent.normal};
color: white;
border: none;

&:disabled {
    background-color: ${props => props.theme.colors.accent.disabled};
};
&:nth-child(2) {
    margin-left: ${({theme})=> theme.sizes.xs}px;
}
`