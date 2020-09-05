import styled from 'styled-components'


export const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
margin-top: ${({theme})=> theme.sizes.xl}px;
li {
    width: 90%;
    line-height: 20px;
    margin-bottom: ${({theme})=> theme.sizes.sm}px;
    padding-bottom: ${({theme})=> theme.sizes.sm}px;
    border-bottom: 2px solid ${({theme})=> theme.colors.primary.light};
    div {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
}
`