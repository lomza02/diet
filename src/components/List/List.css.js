import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.xl}px;
`;

export const ListItem = styled.li`
  width: 100%;
  word-break: break-all;
  line-height: 20px;
  margin-bottom: ${({ theme }) => theme.sizes.sm}px;
  padding-bottom: ${({ theme }) => theme.sizes.sm}px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.light};
`;

export const ItemEdit = styled.span`
  font-size: 20px;
  padding-right: 20px;
`;
