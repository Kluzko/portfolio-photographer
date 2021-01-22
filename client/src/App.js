import React, { lazy, useContext, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Theme from "./Theme";
import GlobalStyle from "./globalStyles";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { FetchProvider } from "./context/FetchContext";

// utils
import ScrollHandler from "./utils/ScrollHandler";

// Components
import Navbar from "./components/Navbar/Navbar.js";
import Loader from "./components/Loader";

// Pages
// Unauthenticated routes
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Album from "./pages/Album";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FourOFour from "./pages/404";
// authenticated routes
const Dashboard = lazy(() => import("./pages/Dashboard"));

// Admin
const AddAlbum = lazy(() => import("./pages/AddAlbum"));
const EditAlbum = lazy(() => import("./pages/EditAlbum"));

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/albums">
      <Albums />
    </Route>
    <Route path="/albums/:id">
      <Album />
    </Route>
    <Route path="*">
      <FourOFour />
    </Route>
  </Switch>
);

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? <>{children}</> : <Redirect to="/" />
      }
    ></Route>
  );
};

const AdminRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() && auth.isAdmin() ? (
          <>{children}</>
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
};

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <AdminRoute path="/addAlbum">
            <AddAlbum />
          </AdminRoute>
          <AdminRoute path="/editAlbum/:id">
            <EditAlbum />
          </AdminRoute>
          <AuthenticatedRoute path="/dashboard">
            <Dashboard />
          </AuthenticatedRoute>
          <UnauthenticatedRoutes />
        </Switch>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <FetchProvider>
          <Theme>
            <GlobalStyle />
            <ScrollHandler />

            <Navbar />
            <AppRoutes />
            <Footer />
          </Theme>
        </FetchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
