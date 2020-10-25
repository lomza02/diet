import styled from 'styled-components';
import { device } from 'utils/device';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: black;
  font-size: 16px;
`;

export const Modal = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
  color: black;
  font-size: 20px;
  padding: ${({ theme }) => theme.sizes.xl}px;
  @media ${device.tablet} {
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: auto;
  }
`;

export const SmallModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 30vh;
`;

export const CloseSection = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: flex-end;
  span {
    font-size: 30px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  width: 100%;
  justify-content: space-between;
`;

export const ContentSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-grow: 4;
  width: 100%;
`;
