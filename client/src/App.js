import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Theme from "./Theme";
import GlobalStyle from "./globalStyles";

// Components
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home";
import AddAlbum from "./pages/AddAlbum";
import Albums from "./pages/Albums";
import Album from "./pages/Album";

function App() {
  return (
    <Router>
      <Theme>
        <GlobalStyle />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/addAlbum" component={AddAlbum} />
        <Route exact path="/albums" component={Albums} />
        <Route path="/albums/:id" component={Album} />
      </Theme>
    </Router>
  );
}

export default App;
