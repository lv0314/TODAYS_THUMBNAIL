import { useRecoilValue } from 'recoil';
import {
  backgroundColorState,
  footerState,
  mainTitleState,
  subTitleState,
  textSizeState,
  thumbnailTypeState,
} from '../../recoil/atoms';
import { PreviewText } from '../PreviewText';
import * as S from './style';

export function Preview() {
  const backgroundColor = useRecoilValue(backgroundColorState);
  return (
    <S.Preview backgroundColor={backgroundColor} className="preview">
      <PreviewMainTitle />
      <PreviewSubTitle />
      <PreviewFooter />
    </S.Preview>
  );
}

function PreviewMainTitle() {
  const mainTitleValue = useRecoilValue(mainTitleState);
  const textSizeValue = useRecoilValue(textSizeState);

  return (
    <S.PreviewTextContainer>
      <PreviewText fontSize={textSizeValue ? 'previewHeaderBigger' : 'previewHeader'} text={mainTitleValue} />
    </S.PreviewTextContainer>
  );
}

function PreviewSubTitle() {
  const subTitleValue = useRecoilValue(subTitleState);
  const thumbnailTypeValue = useRecoilValue(thumbnailTypeState);
  const textSizeValue = useRecoilValue(textSizeState);

  return (
    <S.PreviewTextContainer>
      {thumbnailTypeValue === 1 && (
        <PreviewText fontSize={textSizeValue ? 'previewBaseBigger' : 'previewBase'} text={subTitleValue} />
      )}
    </S.PreviewTextContainer>
  );
}

function PreviewFooter() {
  const footerValue = useRecoilValue(footerState);
  const thumbnailTypeValue = useRecoilValue(thumbnailTypeState);
  const textSizeValue = useRecoilValue(textSizeState);

  return (
    <S.PreviewTextContainer>
      <S.PreviewFooter>
        {(thumbnailTypeValue === 1 || thumbnailTypeValue === 2) && (
          <PreviewText fontSize={textSizeValue ? 'previewBaseBigger' : 'previewBase'} text={footerValue} />
        )}
      </S.PreviewFooter>
    </S.PreviewTextContainer>
  );
}
