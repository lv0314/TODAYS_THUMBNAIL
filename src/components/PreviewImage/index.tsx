import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { saveState, urlState } from '../../recoil/atoms';
import { Text } from '../Common/Text';
import * as S from './style';

export function PreviewImage() {
  const [save, setSave] = useRecoilState(saveState);
  const url = useRecoilValue(urlState);
  const onClickContainer = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setSave(false);
  };
  return save ? (
    <S.Container onClick={onClickContainer}>
      <S.PreviewContainer>
        <Text text="Here is your thumbnail 😎" fontWeight="bold" fontSize="previewPageH2" color="white" />
        <S.PreviewImageFigure>
          <img src={url} alt="thumbnail" />
        </S.PreviewImageFigure>
      </S.PreviewContainer>
    </S.Container>
  ) : (
    <></>
  );
}
