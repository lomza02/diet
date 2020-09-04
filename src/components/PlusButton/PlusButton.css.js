import styled from 'styled-components';


export const PlusButton = styled.button`
width: 70px;
height: 70px;
position: fixed;
bottom: ${props => props.theme.sizes.xl}px;
right: ${props => props.theme.sizes.xl}px;
background-color: ${props => props.theme.colors.accent.normal};
color: white;
border-radius: 50%;
border: none;
font-size: 25px;
`