import styled from 'styled-components';

export const OperationButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const OperationButton = styled.button`
  width: 183px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.lightgray};
  color: ${({ theme }) => theme.color.gray};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.selected};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const FinButton = styled(OperationButton)`
  background-color: ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.white};
`;
