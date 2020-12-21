import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Theme from "./Theme";
import GlobalStyle from "./globalStyles";
// Components
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home";
import AddAlbum from "./components/Album/AddAlbum";
import Albums from "./pages/Albums";
import Album from "./pages/Album";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
