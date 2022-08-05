import styled from 'styled-components';

export const ControlPanel = styled.section`
  width: 768px;
  height: 310px;
`;

export const BlockLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.borderGray};
  margin: 10px 0;
`;
