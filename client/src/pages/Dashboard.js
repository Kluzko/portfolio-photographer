import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import DashboardDetails from "../components/Dashboard/DasboardDetails";
import DasboardLinks from "../components/Dashboard/DasboardLinks";
import { Wrapper } from "../components/Wrappers";

const Dashboard = () => {
  return (
    <Wrapper
      style={{
        marginBottom: "2rem",
      }}
    >
      <DasboardLinks startValue={0} />
      <Suspense fallback={<Loader />}>
        <DashboardDetails />
      </Suspense>
    </Wrapper>
  );
};

export default Dashboard;
