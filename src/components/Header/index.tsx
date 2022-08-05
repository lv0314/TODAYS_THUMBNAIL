import React from 'react';
import { Text } from '../Common/Text';
import * as S from './style';
import FAVICON from '../../assets/icons/favicon.png';

export function HeaderContainer() {
  return (
    <S.HeaderContainer>
      <Header />
    </S.HeaderContainer>
  );
}

export function Header() {
  return (
    <S.Header>
      <S.FaviconContainer>
        <img src={FAVICON} />
      </S.FaviconContainer>
      <Text fontWeight="bold" text="TODAY'S THUMBNAIL" />
    </S.Header>
  );
}
