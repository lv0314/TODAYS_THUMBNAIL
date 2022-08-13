import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const FirstLine = styled.div`
  display: flex;
  align-items: center;
`;
export const TextContainer = styled.div`
  cursor: default;
  margin-left: 230px;
  margin-right: 180px;
`;

export const IconContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
`;

export const PreviewContainer = styled.section`
  width: 800px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: auto;
  margin-top: 200px;
`;

export const PreviewImageFigure = styled.figure`
  width: 768px;
  height: 402px;
  border: 1px solid lightgray;
`;

export const HostedUrlContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
`;
