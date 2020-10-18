import styled from 'styled-components';
import { List } from 'components';

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  margin: ${({ theme }) => theme.sizes.sm}px 0;
  padding: 0;
  font-size: 16px;
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent.normal};
  }
`;

export const SearchInput = styled(Input)`
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
`;

export const ErrMsg = styled.span`
  font-size: 10px;
  color: red;
  display: block;
`;

export const Label = styled.label`
  font-size: 12px;
  display: inline-block;
`;

export const ScrollList = styled(List)`
  flex-wrap: nowrap;
  margin-top: 0;
  height: calc(90vh - 150px);
  overflow-y: auto;
`;
