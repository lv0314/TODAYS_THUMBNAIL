import { atom } from 'recoil';

export const mainTitleState = atom({
  key: 'mainTitle',
  default: 'Main Title',
});

export const subTitleState = atom({
  key: 'subTitle',
  default: 'Sub Title',
});

export const footerState = atom({
  key: 'footer',
  default: 'Footer',
});

export const backgroundColorState = atom({
  key: 'backgroundColor',
  default: '#6cc57b',
});

export const thumbnailTypeState = atom({
  key: 'thumbnailType',
  default: 1,
});

export const textShadowState = atom({
  key: 'textShadow',
  default: false,
});

export const textColorState = atom({
  key: 'textColor',
  default: false,
});

export const textSizeState = atom({
  key: 'textSize',
  default: false,
});

export const thumbnailLineState = atom({
  key: 'thumbnailLine',
  default: 1,
});

export const backgroundLineState = atom({
  key: 'backgroundLine',
  default: 1,
});

export const resetState = atom({
  key: 'reset',
  default: false,
});

export const saveState = atom({
  key: 'save',
  default: false,
});

export const urlState = atom({
  key: 'url',
  default: '',
});
