import styled from 'styled-components';
import HeaderImage from '../../assets/images/header.svg';

export const HeaderContainer = styled.div`
  width: 1373px;
  height: 64px;
  background-image: url(${HeaderImage});
  margin-bottom: 36px;
  display: flex;
  align-items: center;
`;

export const Header = styled.h3`
  margin: 16px 0 0 135px;
  display: flex;
  gap: 10px;
`;

export const FaviconContainer = styled.figure`
  width: 20px;
  height: 20px;
  padding-bottom: 3px;
`;
