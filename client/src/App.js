import React from "react";
import Theme from "./Theme";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home";
import AddAlbum from "./components/Album/AddAlbum";
import Albums from "./components/Album/Albums";

function App() {
  return (
    <Router>
      <Theme>
        <GlobalStyle />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/addAlbum" component={AddAlbum} />
        <Route path="/albums" component={Albums} />
      </Theme>
    </Router>
  );
}

export default App;
