import React from 'react';
import * as S from './style';

type ChildrenType = {
  children?: React.ReactNode;
};

export function Container({ children }: ChildrenType) {
  return <S.Container>{children}</S.Container>;
}
