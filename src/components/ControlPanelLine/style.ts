import styled from 'styled-components';

export const ControlPanelLineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const TextContainer = styled.div`
  width: 140px;
  height: 33px;
  display: flex;
  justify-content: center;
`;

export const ControlButtonContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export const ControlButton = styled.button`
  width: 183px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.lightgray};
  color: ${({ theme }) => theme.color.gray};
  border: none;
  border-radius: 18px;
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

export const SelectedControlButton = styled(ControlButton)`
  background-color: ${({ theme }) => theme.color.selected};
  color: ${({ theme }) => theme.color.white};
`;
