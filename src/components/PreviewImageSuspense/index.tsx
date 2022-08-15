import React from 'react';
import { Text } from '../Common/Text';
import * as S from './style';
import X_ICON from '../../assets/icons/x.svg';

export function PreviewImageSuspense() {
  return (
    <S.Container>
      <S.PreviewContainer>
        <S.FirstLine>
          <S.TextContainer>
            <Text text="Here is your thumbnail 😎" fontWeight="bold" fontSize="previewPageH2" color="white" />
          </S.TextContainer>
          <S.IconContainer>
            <img src={X_ICON} />
          </S.IconContainer>
        </S.FirstLine>
        <S.PreviewImageFigure />
      </S.PreviewContainer>
    </S.Container>
  );
}
