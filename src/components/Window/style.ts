import styled from 'styled-components';

export const Window = styled.div`
  width: 1375px;
  height: 872px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
