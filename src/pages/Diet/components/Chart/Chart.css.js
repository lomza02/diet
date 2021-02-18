import styled from 'styled-components';
import { device } from 'utils/device';

export const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.sizes.xl}px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    div {
      width: 500px;
    }
  }
`;

export const MacroBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  span {
    font-size: 12px;
    width: 80%;
    padding-bottom: ${(props) => props.theme.sizes.xs}px;
  }
  div {
    height: 10px;
    width: 80%;
    background-color: ${(props) => props.color};
  }
`;
