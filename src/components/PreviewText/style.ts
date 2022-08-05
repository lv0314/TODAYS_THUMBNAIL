import styled from 'styled-components';
import { theme } from '../../styles/theme';

export type TextStyledProps = {
  color?: keyof typeof theme.color;
  fontSize?: keyof typeof theme.fontSize;
  fontWeight?: keyof typeof theme.fontWeight;
  textShadow?: keyof typeof theme.textShadow;
};

export const PreviewText = styled.span.attrs<TextStyledProps>(
  ({ color = 'white', fontSize = 'base', fontWeight = 'bold', textShadow = 'base' }) => ({
    style: {
      color: theme.color[color],
      fontSize: theme.fontSize[fontSize],
      fontWeight: theme.fontWeight[fontWeight],
      textShadow: theme.textShadow[textShadow],
    },
  }),
)<TextStyledProps>`
  display: flex;
  align-items: center;
`;
