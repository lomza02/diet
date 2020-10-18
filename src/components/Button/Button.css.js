import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  height: 40px;
  border: none;
  padding: 0 ${({ theme }) => theme.sizes.xl}px;
  background-color: ${(props) =>
    props.red ? 'red' : props.theme.colors.accent.normal};
  color: white;
  &:disabled {
    background-color: ${(props) => props.theme.colors.accent.disabled};
  }
`;
