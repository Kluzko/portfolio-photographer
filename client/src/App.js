import React from 'react';
import Theme from './Theme'

import GlobalStyle from './globalStyles';


// Components
import Navbar from './components/Navbar'
function App() {
  return (
    <Theme>
      <>
        <GlobalStyle/>
        <Navbar/>
      </>
    </Theme>
  );
}

export default App;
