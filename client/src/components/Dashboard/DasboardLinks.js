import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SectionNavigation } from "./style";

const UserLinks = [
  {
    linkTo: "/dashboard",
    name: "User Details",
  },
  {
    name: "Change Password",
    linkTo: "/dashboard/changePassword",
  },
];

const AdminLinks = [
  {
    name: "User Details",
    linkTo: "/dashboard",
  },
  {
    name: "Change Password",
    linkTo: "/dashboard/changePassword",
  },
  {
    name: "Users",
    linkTo: "/dashboard/users",
  },
  {
    name: "Articles",
    linkTo: "/dashboard/articles",
  },
  {
    name: "Create Article",
    linkTo: "/blog/create",
  },
];

const BlogerLinks = [
  {
    name: "User Details",
    linkTo: "/dashboard",
  },
  {
    name: "Change Password",
    linkTo: "/dashboard/changePassword",
  },
  {
    name: "Articles",
    linkTo: "/dashboard/articles",
  },
  {
    name: "Create Article",
    linkTo: "/blog/create",
  },
];

const DasboardLinks = ({ startValue }) => {
  const authContext = useContext(AuthContext);
  const [active, setActive] = useState(startValue);

  return (
    <SectionNavigation>
      <ul>
        {authContext.isAdmin()
          ? AdminLinks.map((link, i) => (
              <li key={i} className={active === i ? "active" : ""}>
                <Link to={link.linkTo} onClick={() => setActive(i)}>
                  {link.name}
                </Link>
              </li>
            ))
          : authContext.isBloger()
          ? BlogerLinks.map((link, i) => (
              <li key={i} className={active === i ? "active" : ""}>
                <Link to={link.linkTo} onClick={() => setActive(i)}>
                  {link.name}
                </Link>
              </li>
            ))
          : UserLinks.map((link, i) => (
              <li key={i} className={active === i ? "active" : ""}>
                <Link to={link.linkTo} onClick={() => setActive(i)}>
                  {link.name}
                </Link>
              </li>
            ))}
      </ul>
    </SectionNavigation>
  );
};

export default DasboardLinks;
