import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  backgroundColorState,
  backgroundLineState,
  footerState,
  footerVisibleState,
  hostedUrlState,
  mainTitleState,
  mainTitleVisibleState,
  resetState,
  saveState,
  subTitleState,
  subTitleVisibleState,
  textColorState,
  textShadowState,
  textSizeState,
  thumbnailLineState,
} from '../../recoil/atoms';
import * as S from './style';
import html2canvas from 'html2canvas';
import axios from 'axios';

export function OperationButtons() {
  return (
    <S.OperationButtonsContainer>
      <ResetButton />
      <FinishButton />
    </S.OperationButtonsContainer>
  );
}

function ResetButton() {
  const resetMainTitle = useResetRecoilState(mainTitleState);
  const resetSubTitle = useResetRecoilState(subTitleState);
  const resetFooter = useResetRecoilState(footerState);
  const resetBackground = useResetRecoilState(backgroundColorState);
  const resetMainTitleVisible = useResetRecoilState(mainTitleVisibleState);
  const resetSubTitleVisible = useResetRecoilState(subTitleVisibleState);
  const resetFooterVisible = useResetRecoilState(footerVisibleState);
  const resetTextShadow = useResetRecoilState(textShadowState);
  const resetTextColor = useResetRecoilState(textColorState);
  const resetTextSize = useResetRecoilState(textSizeState);
  const resetThumbnailLine = useResetRecoilState(thumbnailLineState);
  const resetBackgroundLine = useResetRecoilState(backgroundLineState);
  const [reset, setReset] = useRecoilState(resetState);

  const onClickReset = () => {
    resetMainTitle();
    resetSubTitle();
    resetFooter();
    resetBackground();
    resetMainTitleVisible();
    resetSubTitleVisible();
    resetFooterVisible();
    resetTextShadow();
    resetTextColor();
    resetTextSize();
    resetThumbnailLine();
    resetBackgroundLine();
    setReset(!reset);
  };

  return <S.OperationButton onClick={onClickReset}>초기화</S.OperationButton>;
}

function FinishButton() {
  const [save, setSave] = useRecoilState(saveState);
  const [hostedUrl, setHostedUrl] = useRecoilState(hostedUrlState);

  const onClickFinButton = async () => {
    const copiedUrl = await copyPreview();
    // setUrl(copiedUrl);
    setHostedUrl(copiedUrl);
    setSave(true);
  };
  return <S.FinButton onClick={onClickFinButton}>완료</S.FinButton>;
}

const copyPreview = async () => {
  const preview = await html2canvas(document.getElementsByClassName('preview')[0] as HTMLElement, {
    useCORS: true,
  });
  const imgurUrl = preview.toDataURL('image/png').split(',')[1];
  return await uploadImgur(imgurUrl);
};

const uploadImgur = async (url: string) => {
  const apiBase = 'https://api.imgur.com/3/image';
  const res = await axios.post(
    apiBase,
    {
      image: url,
      type: 'base64',
    },
    {
      headers: {
        Authorization: 'Client-ID e44de39a9ffe0d6',
      },
    },
  );
  const link = res.data.data.link;

  return link;
};
