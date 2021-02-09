import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useApi, apiStates } from "../../../hooks/useApi";
import { getDate } from "../../../utils/getDate";
import ErrorMessage from "../../ErrorMessage";
import Loader from "../../Loader";
import { Wrapper } from "../../Wrappers";
import DasboardLinks from "../DasboardLinks";
import Table from "../Table";

const BlogerDashboardArticle = () => {
  const auth = useContext(AuthContext);

  const { _id } = auth.authState.userInfo;

  const {
    data: { state, data, error },
  } = useApi(`articles/user/${_id}`);

  const columns = useMemo(
    () => [
      {
        Header: "Article  info",
        columns: [
          {
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "published",
            accessor: "published",
            Cell: ({ row }) => {
              return (
                <p>{row.original.published ? "published" : "Not published"}</p>
              );
            },
          },
          {
            Header: "Date",
            accessor: "createdAt",
            Cell: ({ row }) => {
              const date = getDate(row.original.createdAt);
              return <p>{date}</p>;
            },
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
                <Link to={`/blog/edit/${row.original.slug}`}>
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
              return <button>Delete</button>;
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
      const articles = data.data;

      return (
        <Wrapper>
          <DasboardLinks startValue={2} />

          <Table columns={columns} data={articles} filterBy="title" />
        </Wrapper>
      );
    default:
      return <Loader />;
  }
};

export default BlogerDashboardArticle;
