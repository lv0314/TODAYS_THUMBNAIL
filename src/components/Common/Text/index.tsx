import * as S from './style';

type TextProps = {
  text: string | number;
} & S.TextStyledProps;

export function Text({ text, color, fontSize, fontWeight }: TextProps) {
  return (
    <S.Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {text}
    </S.Text>
  );
}
