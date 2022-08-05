import styled from 'styled-components';
import BG from '../../assets/images/background.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(${BG}) center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
