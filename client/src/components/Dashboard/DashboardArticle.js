import React, { lazy, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const AdminDashboardArticle = lazy(() =>
  import("./Admin/AdminDashboardArticle")
);
const BlogerDashboardArticle = lazy(() =>
  import("./Bloger/BlogerDashboardArticle")
);

const DashboardArticle = () => {
  const auth = useContext(AuthContext);

  return auth.isAdmin() ? (
    <AdminDashboardArticle />
  ) : (
    <BlogerDashboardArticle />
  );
};

export default DashboardArticle;
