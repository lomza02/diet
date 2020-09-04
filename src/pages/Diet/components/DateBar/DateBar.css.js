import styled from 'styled-components'


export const Bar = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 20vh;
width: 100%;
background-color: ${props => props.theme.colors.primary.normal};
color: white;

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
