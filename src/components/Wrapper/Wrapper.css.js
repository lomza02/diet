import styled from 'styled-components';
import { device } from 'utils/device';

const Wrapper = styled.main`
  padding: ${({ theme }) => theme.sizes.xl}px;
  /* padding-left: ${({ theme }) => theme.sizes.xl}px;
  padding-right: ${({ theme }) => theme.sizes.xl}px; */
  @media ${device.desktop} {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default Wrapper;
