import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      base: string;
      previewHeader: string;
      previewHeaderBigger: string;
      previewBase: string;
      previewBaseBigger: string;
      previewPageHeader: string;
      previewPageHeader: string;
      previewPageH2: string;
    };

    fontWeight: {
      base: number;
      bold: number;
    };

    textShadow: {
      base: string;
      on: string;
    };

    color: {
      black: string;
      lightgray: string;
      gray: string;
      borderGray: string;
      white: string;
      red: string;
      yellow: string;
      green: string;
      selected: string;
      finish: string;
      preview: string;
    };

    buttonWidth: {
      large: string;
      medium: string;
      small: string;
    };

    buttonHeight: {
      large: string;
      medium: string;
      small: string;
    };

    iconSize: {
      base: string;
    };
  }
}
