import styled from 'styled-components';



export const ButtonWrapper = styled.div`
display: flex;
width: 90%;
justify-content: flex-end;
margin: ${({theme})=> theme.sizes.xl}px 0;
`
export const FormWrapper = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;

`

export const Form = styled.form`
font-size: 14px;
padding: 10px;

`

export const ErrorMsg = styled.div`
font-size: 10px; 
color: red;
text-align: 'left';
`