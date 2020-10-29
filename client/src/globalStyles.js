import {createGlobalStyle} from 'styled-components';


 const GlobalStyle = createGlobalStyle`

  @import 
  url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,100&display=swap');

  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, 
form, fieldset, input, p, blockquote, table, th, td, embed, object {
	padding: 0;
	margin: 0; 
  font-family: 'Lato', sans-serif;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.background}
	}
 
  body{
		position:relative;
		height:100vh;
		overflow-x:none;
		overflow-y:none;
	}
table {
	border-collapse: collapse;
	border-spacing: 0;
	}
fieldset, img, abbr {
	border: 0;
	}
address, caption, cite, code, dfn, em, 
h1, h2, h3, h4, h5, h6, strong, th, var {
	font-weight: normal;
	font-style: normal;
	}
ul {
	list-style: none;
	}


a, ins {
	text-decoration: none;
  color:inherit;
	}

`
export default GlobalStyle;
