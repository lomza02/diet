import styled from 'styled-components';


export const Button = styled.button`
display: flex;
cursor: pointer;
justify-content: flex-end;
align-items: center;
height: 30px;
font-size: 16px;
padding: ${({theme})=> theme.sizes.xl}px ${({theme})=> theme.sizes.xl}px;
background-color: ${props => props.red ? 'red' : props.theme.colors.accent.normal};
color: white;
border: none;
margin: ${(props)=> props.theme.sizes.xl}px;

&:disabled {
    background-color: ${props => props.theme.colors.accent.disabled};
};
`

