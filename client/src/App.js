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
import Albums from "./pages/Album/Albums";
import Album from "./pages/Album/Album";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import FourOFour from "./pages/404";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Blog/Article";

import { MainWrapper } from "./components/Wrappers";

// authenticated routes
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ChangePassword = lazy(() =>
  import("./components/Dashboard/ChangePassword")
);
// Admin
const AddAlbum = lazy(() => import("./pages/Album/AddAlbum"));
const EditAlbum = lazy(() => import("./pages/Album/EditAlbum"));
const AdminUsers = lazy(() =>
  import("./components/Dashboard/Admin/AdminUsers")
);
const AdminEditUser = lazy(() =>
  import("./components/Dashboard/Admin/AdminEditUser")
);
// Bloger & Admin
const CreateArticle = lazy(() => import("./pages/Blog/CreateArticle"));
const DashboardArticle = lazy(() =>
  import("./components/Dashboard/DashboardArticle")
);
const EditArticle = lazy(() => import("./pages/Blog/EditArticle"));

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
    <Route path="/passwordForgot">
      <ForgotPassword />
    </Route>
    <Route path="/resetPassword/:resettoken">
      <ResetPassword />
    </Route>
    <Route exact path="/blog">
      <Blog />
    </Route>
    <Route exact path="/blog/:slug">
      <Article />
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
        auth.isAuthenticated() ? <>{children}</> : <Redirect to="/login" />
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

const BlogerRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() && (auth.isAdmin() || auth.isBloger()) ? (
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
          <AdminRoute path="/admin/user/:id">
            <AdminEditUser />
          </AdminRoute>
          <AdminRoute exact path="/dashboard/users">
            <AdminUsers />
          </AdminRoute>
          <BlogerRoute path="/blog/create">
            <CreateArticle />
          </BlogerRoute>
          <BlogerRoute path="/blog/edit/:slug">
            <EditArticle />
          </BlogerRoute>
          <BlogerRoute path="/dashboard/articles">
            <DashboardArticle />
          </BlogerRoute>
          <AuthenticatedRoute exact path="/dashboard">
            <Dashboard />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/dashboard/changePassword">
            <ChangePassword />
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
            <MainWrapper>
              <Navbar />
              <AppRoutes />
              <Footer />
            </MainWrapper>
          </Theme>
        </FetchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
