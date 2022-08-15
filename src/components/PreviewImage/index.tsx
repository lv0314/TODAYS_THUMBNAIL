import React, { Suspense } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { hostedUrlState, saveState } from '../../recoil/atoms';
import { Text } from '../Common/Text';
import * as S from './style';
import X_ICON from '../../assets/icons/x.svg';
import CopyToClipboard from 'react-copy-to-clipboard';

export function PreviewImage() {
  const [save, setSave] = useRecoilState(saveState);
  const hostedUrl = useRecoilValue(hostedUrlState);

  const onClickModalOff = (e: React.MouseEvent<HTMLDivElement>) => {
    setSave(false);
  };

  return save ? (
    <S.Container>
      <S.PreviewContainer>
        <S.FirstLine>
          <S.TextContainer>
            <Text text="Here is your thumbnail 😎" fontWeight="bold" fontSize="previewPageH2" color="white" />
          </S.TextContainer>
          <S.IconContainer onClick={onClickModalOff}>
            <img src={X_ICON} />
          </S.IconContainer>
        </S.FirstLine>
        <Suspense fallback={<div>test</div>}>
          <S.PreviewImageFigure id="previewFigure">
            <img src={hostedUrl} alt="thumbnail" />
          </S.PreviewImageFigure>
        </Suspense>
        <CopyToClipboard text={hostedUrl} onCopy={() => alert('copied on your clipboard')}>
          <S.HostedUrlContainer>
            <Text text={hostedUrl} fontWeight="bold" fontSize="previewPageH2" color="white"></Text>
          </S.HostedUrlContainer>
        </CopyToClipboard>
        <Text text="⬆️ CLICK TO COPY ⬆️" fontWeight="bold" fontSize="previewBase" color="white"></Text>
      </S.PreviewContainer>
    </S.Container>
  ) : (
    <></>
  );
}
