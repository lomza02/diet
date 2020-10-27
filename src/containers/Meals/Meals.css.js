import styled from 'styled-components';
import { List } from 'components';

export const MealInfo = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`;

export const MealList = styled(List)`
  margin-bottom: 90px;
`;

export const EditContainer = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.primary.normal};
  cursor: pointer;
  font-weight: bold;
`;
