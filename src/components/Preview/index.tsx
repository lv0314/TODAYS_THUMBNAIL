import { useRecoilValue } from 'recoil';
import {
  backgroundColorState,
  footerState,
  footerVisibleState,
  mainTitleState,
  mainTitleVisibleState,
  subTitleState,
  subTitleVisibleState,
  textSizeState,
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
  const mainTitleVisibleValue = useRecoilValue(mainTitleVisibleState);
  const textSizeValue = useRecoilValue(textSizeState);

  return (
    <S.PreviewTextContainer>
      {mainTitleVisibleValue && (
        <PreviewText fontSize={textSizeValue ? 'previewHeaderBigger' : 'previewHeader'} text={mainTitleValue} />
      )}
    </S.PreviewTextContainer>
  );
}

function PreviewSubTitle() {
  const subTitleValue = useRecoilValue(subTitleState);
  const subTitleVisibleValue = useRecoilValue(subTitleVisibleState);
  const textSizeValue = useRecoilValue(textSizeState);

  return (
    <S.PreviewTextContainer>
      {subTitleVisibleValue && (
        <PreviewText fontSize={textSizeValue ? 'previewBaseBigger' : 'previewBase'} text={subTitleValue} />
      )}
    </S.PreviewTextContainer>
  );
}

function PreviewFooter() {
  const footerValue = useRecoilValue(footerState);
  const footerVisibleValue = useRecoilValue(footerVisibleState);
  const textSizeValue = useRecoilValue(textSizeState);

  return (
    <S.PreviewTextContainer>
      <S.PreviewFooter>
        {footerVisibleValue && (
          <PreviewText fontSize={textSizeValue ? 'previewBaseBigger' : 'previewBase'} text={footerValue} />
        )}
      </S.PreviewFooter>
    </S.PreviewTextContainer>
  );
}
