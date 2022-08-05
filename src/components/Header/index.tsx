import React from 'react';
import { Text } from '../Common/Text';
import * as S from './style';

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
      <Text fontWeight="bold" text="TODAY'S THUMBNAIL" />
    </S.Header>
  );
}
