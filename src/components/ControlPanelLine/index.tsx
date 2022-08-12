import React from 'react';
import { useRecoilState } from 'recoil';
import {
  backgroundColorState,
  backgroundLineState,
  footerVisibleState,
  mainTitleVisibleState,
  subTitleVisibleState,
  textColorState,
  textShadowState,
  textSizeState,
} from '../../recoil/atoms';
import { getRandomHex } from '../../utils/util';
import { Text } from '../Common/Text';
import * as S from './style';

export function ThumbnailTypeLine() {
  const [mainTitleVisible, setMainTitleVisible] = useRecoilState(mainTitleVisibleState);
  const [subTitleVisible, setsubTitleVisible] = useRecoilState(subTitleVisibleState);
  const [footerVisible, setFooterVisible] = useRecoilState(footerVisibleState);

  const onClickType1 = () => {
    setMainTitleVisible(!mainTitleVisible);
  };
  const onClickType2 = () => {
    setsubTitleVisible(!subTitleVisible);
  };
  const onClickType3 = () => {
    setFooterVisible(!footerVisible);
  };

  return (
    <S.ControlPanelLineContainer>
      <S.TextContainer>
        <Text text="썸네일 구성 요소" color="gray" fontWeight="bold" />
      </S.TextContainer>
      <S.ControlButtonContainer>
        {mainTitleVisible ? (
          <S.SelectedControlButton onClick={onClickType1}>Main Title</S.SelectedControlButton>
        ) : (
          <S.ControlButton onClick={onClickType1}>Main Title</S.ControlButton>
        )}
        {subTitleVisible ? (
          <S.SelectedControlButton onClick={onClickType2}>Sub Title</S.SelectedControlButton>
        ) : (
          <S.ControlButton onClick={onClickType2}>Sub Title</S.ControlButton>
        )}
        {footerVisible ? (
          <S.SelectedControlButton onClick={onClickType3}>Footer</S.SelectedControlButton>
        ) : (
          <S.ControlButton onClick={onClickType3}>Footer</S.ControlButton>
        )}
      </S.ControlButtonContainer>
    </S.ControlPanelLineContainer>
  );
}

export function BackgroundLine() {
  const [backgroundColor, setBackgroundColor] = useRecoilState(backgroundColorState);
  const [selected, setSelected] = useRecoilState(backgroundLineState);

  const onClickSolidColor = () => {
    setBackgroundColor(getRandomHex());
    setSelected(1);
  };
  const onClickGradient = () => {
    setBackgroundColor(`linear-gradient(${getRandomHex()}, ${getRandomHex()})`);
    setSelected(2);
  };
  const onClickURL = () => {
    const inputUrl = prompt('이미지 주소를 입력해주세요');
    if (inputUrl !== null) setBackgroundColor(`url(${inputUrl}) center center / cover no-repeat`);
    setSelected(3);
  };

  return (
    <S.ControlPanelLineContainer>
      <S.TextContainer>
        <Text text="배경" color="gray" fontWeight="bold" />
      </S.TextContainer>
      <S.ControlButtonContainer>
        {selected === 1 ? (
          <S.SelectedControlButton onClick={onClickSolidColor}>랜덤 단색</S.SelectedControlButton>
        ) : (
          <S.ControlButton onClick={onClickSolidColor}>랜덤 단색</S.ControlButton>
        )}
        {selected === 2 ? (
          <S.SelectedControlButton onClick={onClickGradient}>랜덤 그라디언트</S.SelectedControlButton>
        ) : (
          <S.ControlButton onClick={onClickGradient}>랜덤 그라디언트</S.ControlButton>
        )}
        {selected === 3 ? (
          <S.SelectedControlButton onClick={onClickURL}>이미지 URL</S.SelectedControlButton>
        ) : (
          <S.ControlButton onClick={onClickURL}>이미지 URL</S.ControlButton>
        )}
      </S.ControlButtonContainer>
    </S.ControlPanelLineContainer>
  );
}

export function TextStyleLine() {
  const [textShadow, setTextShadow] = useRecoilState(textShadowState);
  const [textColor, setTextColor] = useRecoilState(textColorState);
  const [textSize, setTextSize] = useRecoilState(textSizeState);

  const onClickTextShadow = () => setTextShadow(!textShadow);
  const onClickTextColor = () => setTextColor(!textColor);
  const onClickTextSize = () => setTextSize(!textSize);

  return (
    <S.ControlPanelLineContainer>
      <S.TextContainer>
        <Text text="텍스트 스타일" color="gray" fontWeight="bold" />
      </S.TextContainer>
      <S.ControlButtonContainer>
        {textShadow ? (
          <S.SelectedControlButton onClick={onClickTextShadow}>텍스트 그림자</S.SelectedControlButton>
        ) : (
          <S.ControlButton onClick={onClickTextShadow}>텍스트 그림자</S.ControlButton>
        )}
        {textColor ? (
          <S.SelectedControlButton onClick={onClickTextColor}>색상 반전</S.SelectedControlButton>
        ) : (
          <S.ControlButton onClick={onClickTextColor}>색상 반전</S.ControlButton>
        )}
        {textSize ? (
          <S.SelectedControlButton onClick={onClickTextSize}>크기 조절</S.SelectedControlButton>
        ) : (
          <S.ControlButton onClick={onClickTextSize}>크기 조절</S.ControlButton>
        )}
      </S.ControlButtonContainer>
    </S.ControlPanelLineContainer>
  );
}
