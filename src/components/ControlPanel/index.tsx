import { BackgroundLine, TextStyleLine, ThumbnailTypeLine } from '../ControlPanelLine';
import { InputLine } from '../InputLine';
import { OperationButtons } from '../OperationButtons';
import * as S from './style';

export function ControlPanel() {
  return (
    <S.ControlPanel>
      <InputLine />
      <S.BlockLine />
      <ThumbnailTypeLine />
      <S.BlockLine />
      <BackgroundLine />
      <S.BlockLine />
      <TextStyleLine />
      <S.BlockLine />
      <OperationButtons />
    </S.ControlPanel>
  );
}
