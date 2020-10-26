import styled from 'styled-components';

const ErrMsg = styled.span`
  font-size: 10px;
  margin: ${(props) => props.theme.sizes.xs}px 0;
  color: red;
  display: block;
`;

export default ErrMsg;
