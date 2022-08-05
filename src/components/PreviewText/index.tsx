import { useRecoilValue } from 'recoil';
import { textColorState, textShadowState } from '../../recoil/atoms';
import * as S from './style';

type TextProps = {
  text: string | number;
} & S.TextStyledProps;

export function PreviewText({ text, fontSize, fontWeight }: TextProps) {
  const textShadowValue = useRecoilValue(textShadowState);
  const textColorValue = useRecoilValue(textColorState);

  return (
    <S.PreviewText
      color={textColorValue ? 'black' : 'white'}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textShadow={textShadowValue ? 'on' : 'base'}
    >
      {text}
    </S.PreviewText>
  );
}
