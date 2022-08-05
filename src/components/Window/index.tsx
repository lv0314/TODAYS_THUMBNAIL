import React from 'react';
import { ControlPanel } from '../ControlPanel';
import { HeaderContainer } from '../Header';
import { Preview } from '../Preview';
import * as S from './style';

export function Window() {
  return (
    <S.Window>
      <HeaderContainer />
      <Preview />
      <ControlPanel />
    </S.Window>
  );
}
