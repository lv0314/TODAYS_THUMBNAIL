import styled from 'styled-components';

export const InputText = styled.input`
  width: 213px;
  height: 34px;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.color.borderGray};

  :focus {
    outline: none;
  }
`;

export const InputLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
