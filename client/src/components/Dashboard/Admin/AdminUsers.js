import React, { useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import Table from "../Table";
import Loader from "../../Loader";

import ErrorMessage from "../../ErrorMessage";
import { Wrapper } from "../../Wrappers";
import DasboardLinks from "../DasboardLinks";
import { FetchContext } from "../../../context/FetchContext";
import { useApi, apiStates } from "../../../hooks/useApi";

const AdminUsers = () => {
  const {
    data: { state, data, error },
    setRefetch,
  } = useApi(`users/`, true);

  const fetchContext = useContext(FetchContext);

  const handleDelete = async (id) => {
    const { data } = await fetchContext.authAxios.delete(`users/${id}`);
    setRefetch(data.data);
  };
  // Todo dodac uzytkownika ktory stworzyl
  const columns = useMemo(
    () => [
      {
        Header: "Users info",
        columns: [
          {
            Header: "Username",
            accessor: "username",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Role",
            accessor: "role",
          },
        ],
      },
      {
        Header: "Actions",
        columns: [
          {
            Header: "Edit",
            accessor: "edit",
            Cell: ({ row }) => {
              return (
                <Link to={`/admin/user/${row.original._id}`}>
                  <span
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      padding: "2px 4px",
                      borderRadius: "5px",
                    }}
                  >
                    Edit
                  </span>
                </Link>
              );
            },
          },
          {
            Header: "Delete",
            accessor: "delete",
            Cell: ({ row }) => {
              return (
                <button onClick={() => handleDelete(row.original._id)}>
                  Delete
                </button>
              );
            },
          },
        ],
      },
    ],
    []
  );

  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{error || "General Error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      const users = data.data;

      return (
        <Wrapper>
          <DasboardLinks startValue={2} />

          <Table columns={columns} data={users} filterBy="username" />
        </Wrapper>
      );
    default:
      return <Loader />;
  }
};

export default AdminUsers;
