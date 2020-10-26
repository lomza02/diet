import styled from 'styled-components';
import { List, Input } from 'components';

export const ScrollList = styled(List)`
  flex-wrap: nowrap;
  margin-top: 0;
  height: calc(90vh - 250px);
  overflow-y: auto;
`;

export const SearchInput = styled(Input)`
  margin: 20px 0;
`;

export const Header = styled.h5`
  font-size: 20px;
  line-height: 30px;
  margin: ${(props) => props.theme.sizes.xl}px 0;
  color: ${(props) => props.theme.colors.primary.dark};
  text-transform: uppercase;
`;
