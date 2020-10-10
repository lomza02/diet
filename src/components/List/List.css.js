import styled from 'styled-components'

export const List = styled.ul`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
margin-top: ${({theme})=> theme.sizes.xl}px;
li {
    width: 90%;
    word-break: break-all;
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

export const ProductList = styled(List)`
margin-bottom: 90px;
`

export const CheckList = styled(List)`
    max-height: calc(100vh - 200px);
    overflow-y: auto;
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
   input {
       flex-shrink: 0;
       width: 17px;
       height: 17px;
       color: ${({theme})=> theme.colors.primary.normal}
   }
}
`

export const InputList = styled(List)`
    display: flex;
    flex-wrap: wrap;
    li {
        input {
            margin-top: ${({theme})=> theme.sizes.sm}px;
            width: 100%;
        }
        span {
            font-size: 16px;
        }
    }
`