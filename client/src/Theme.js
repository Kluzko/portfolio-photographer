import React from 'react'
import {ThemeProvider} from 'styled-components'
// theme for website

const breakPoints = {
  mobile:'575.98px',
  tablet:'767.98px',
}

const theme = {
  colors:{
    background:'#E5E5E5',
    primary:'#007CB3',
    primaryHover:'#0039b3',
  },
  device:{
    phoneMax:`(max-width: ${breakPoints.mobile})`,
    phoneMin:`(min-width: ${breakPoints.mobile})`,
    tabletMax:`(max-wdith: ${breakPoints.tablet})`
  }
  
}

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default Theme;