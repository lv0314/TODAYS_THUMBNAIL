import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { footerState, mainTitleState, resetState, subTitleState } from '../../recoil/atoms';
import * as S from './style';

export function InputLine() {
  const [mainTitle, setMainTitle] = useRecoilState(mainTitleState);
  const [subTitle, setsubTitle] = useRecoilState(subTitleState);
  const [footer, setFooter] = useRecoilState(footerState);
  const reset = useRecoilValue(resetState);

  const mainRef = useRef<HTMLInputElement>(null);
  const subRef = useRef<HTMLInputElement>(null);
  const footerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (mainRef.current === null || subRef.current === null || footerRef.current === null) return;
    mainRef.current.value = '';
    subRef.current.value = '';
    footerRef.current.value = '';
  }, [reset]);

  const onChangeMainTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMainTitle(event.target.value);
  };

  const onChangeSubTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsubTitle(event.target.value);
  };

  const onChangeFooter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFooter(event.target.value);
  };

  return (
    <S.InputLineContainer>
      <S.InputText placeholder="> MainTitle" onChange={onChangeMainTitle} ref={mainRef} />
      <S.InputText placeholder="> SubTitle" onChange={onChangeSubTitle} ref={subRef} />
      <S.InputText placeholder="> Footer" onChange={onChangeFooter} ref={footerRef} />
    </S.InputLineContainer>
  );
}
