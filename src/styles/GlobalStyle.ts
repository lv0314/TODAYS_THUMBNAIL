import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle` 
	${reset}

	html {
		margin: 0;
		padding: 0;
	}

	body {
		max-width: 100vw;
		max-height: 100vh;
		font-family: "Noto Sans KR", sans-serif;
		margin: 0 auto;
	}
	
	div {
		box-sizing: border-box;
	}

	img {
		width: 100%;
		height: 100%;
	}

	button {
		cursor: pointer;
		font-size: 16px;
	}

	input{
		font-size: 16px;
	}

	a {
		text-decoration:none;
		color: inherit;
	}

	span {
		display:block;
	}

`;
