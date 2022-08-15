import React from 'react';
import { Container } from './components/Container';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Window } from './components/Window';
import { RecoilRoot } from 'recoil';
import { PreviewImage } from './components/PreviewImage';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Container>
          <Window />
        </Container>
        <PreviewImage />
      </RecoilRoot>
    </ThemeProvider>
  );
}
