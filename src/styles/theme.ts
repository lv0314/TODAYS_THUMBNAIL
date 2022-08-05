import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  fontSize: {
    base: '16px',
    previewHeader: '54px',
    previewHeaderBigger: '60px',
    previewBase: '24px',
    previewBaseBigger: '30px',
    previewPageHeader: '48px',
    previewPageH2: '32px',
  },

  fontWeight: {
    base: 100,
    bold: 500,
  },

  textShadow: {
    base: 'none',
    on: '2px 2px 4px gray',
  },

  color: {
    black: '#000000',
    lightgray: '#F4F4F4',
    gray: '#666666',
    borderGray: '#CACACA',
    white: '#FFFFFF',
    red: '#FF534D',
    yellow: '#FEB328',
    green: '#23C238',
    selected: '#007AFF',
    finish: '#6E7191',
    preview: '#F6D2D2',
  },

  buttonWidth: {
    large: '230px',
    medium: '180px',
    small: '130px',
  },

  buttonHeight: {
    large: '45px',
    medium: '40px',
    small: '35px',
  },

  iconSize: {
    base: '30px',
  },
};
