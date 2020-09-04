import styled from 'styled-components';


export const Button = styled.button`
display: flex;
align-items: center;
height: 30px;
font-size: 16px;
padding: ${({theme})=> theme.sizes.xl}px ${({theme})=> theme.sizes.xl}px;
background-color: ${props => props.theme.colors.accent.dark};
color: white;
border: none;
`