import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  backgroundColorState,
  backgroundLineState,
  footerState,
  mainTitleState,
  resetState,
  saveState,
  subTitleState,
  textColorState,
  textShadowState,
  textSizeState,
  thumbnailLineState,
  thumbnailTypeState,
  urlState,
} from '../../recoil/atoms';
import * as S from './style';
import html2canvas from 'html2canvas';

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
  const resetThumbnailType = useResetRecoilState(thumbnailTypeState);
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
    resetThumbnailType();
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
  const [url, setUrl] = useRecoilState(urlState);
  const onClickFinButton = async () => {
    setSave(true);
    setUrl(await copyPreview());
  };
  return <S.FinButton onClick={onClickFinButton}>완료</S.FinButton>;
}

const copyPreview = async () => {
  let url = '';
  const preview = await html2canvas(document.getElementsByClassName('preview')[0] as HTMLElement, {
    useCORS: true,
  });
  url = preview.toDataURL('image/png');

  return url;
};
