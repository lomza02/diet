import styled from 'styled-components'


export const Bar = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 120px;
width: 100%;
background-color: ${props => props.theme.colors.primary.normal};
color: white;
margin-bottom: ${props => props.theme.sizes.xl}px;

div {
    width: 70%;
    h3 {
        font-size: ${props => props.theme.sizes.sm * 1.5}px;
        text-align: center;
    }
}
span {
    font-size: ${props => props.theme.sizes.xl * 1.5}px;
    cursor: pointer;

}
`
