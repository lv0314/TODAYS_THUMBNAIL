import React, { Suspense } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { hostedUrlState, saveState } from '../../recoil/atoms';
import { Text } from '../Common/Text';
import * as S from './style';
import X_ICON from '../../assets/icons/x.svg';

export function PreviewImage() {
  const [save, setSave] = useRecoilState(saveState);
  const hostedUrl = useRecoilValue(hostedUrlState);

  const onClickModalOff = (e: React.MouseEvent<HTMLDivElement>) => {
    setSave(false);
  };
  const onCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    copyToClipboard(e.currentTarget.innerText);
    alert('copied on your clipboard');
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
        <S.HostedUrlContainer onClick={onCopy}>
          <Text text={hostedUrl} fontWeight="bold" fontSize="previewPageH2" color="white"></Text>
        </S.HostedUrlContainer>
        <Text text="⬆️ CLICK TO COPY ⬆️" fontWeight="bold" fontSize="previewBase" color="white"></Text>
      </S.PreviewContainer>
    </S.Container>
  ) : (
    <></>
  );
}

function unsecuredCopyToClipboard(text: string) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(textArea);
}

function copyToClipboard(content: string) {
  if (window.isSecureContext && navigator.clipboard) {
    navigator.clipboard.writeText(content);
  } else {
    unsecuredCopyToClipboard(content);
  }
}
