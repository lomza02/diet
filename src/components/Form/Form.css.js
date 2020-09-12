import styled from 'styled-components';


export const Form = styled.form`
font-size: 20px;
padding: 10px;

`

export const InputBox = styled.div`

div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
}
label, span {
    letter-spacing: .5px;
    width: 100%;
}
label {
    margin-bottom: 5px;
    font-size: 12px;
}
span {
    font-size: 10px;
    color: red;
}
input {
    width: 80%;
    font-size: 14px;
    border: none;
    border-bottom: 2px solid ${({theme})=> theme.colors.primary.light};
    &:focus {
        border-bottom: 3px solid ${({theme})=> theme.colors.accent.normal};
    }
}
`