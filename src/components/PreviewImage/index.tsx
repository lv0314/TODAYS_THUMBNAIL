import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { hostedUrlState, saveState, urlState } from '../../recoil/atoms';
import { Text } from '../Common/Text';
import * as S from './style';
import X_ICON from '../../assets/icons/x.svg';

export function PreviewImage() {
  const [save, setSave] = useRecoilState(saveState);
  const url = useRecoilValue(urlState);
  const hostedUrl = useRecoilValue(hostedUrlState);

  const onClickModalOff = () => setSave(false);
  const onCopy = () => {
    copyToClipboard(hostedUrl);
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
        <S.PreviewImageFigure id="previewFigure">
          <img src={url} alt="thumbnail" />
        </S.PreviewImageFigure>
        <S.HostedUrlContainer onClick={onCopy}>
          <Text text={`${hostedUrl} (click to copy)`} fontWeight="bold" fontSize="previewPageH2" color="white"></Text>
        </S.HostedUrlContainer>
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
  textArea.focus();
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
