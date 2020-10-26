import styled from 'styled-components';

const Input = styled.input`
  height: 30px;
  width: 100%;
  border: 3px solid ${({ theme }) => theme.colors.primary.light};
  margin: ${({ theme }) => theme.sizes.xs}px 0;
  padding: 2px;
  font-size: 16px;
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent.normal};
  }
`;

export default Input;
