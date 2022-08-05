import styled from 'styled-components';

export const Preview = styled.section<{ backgroundColor: string }>`
  width: 768px;
  height: 402px;
  box-sizing: border-box;
  background: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  padding-top: 90px;
  gap: 20px;
`;

export const PreviewFooter = styled.span`
  margin-top: 50px;
`;

export const PreviewTextContainer = styled.div``;
