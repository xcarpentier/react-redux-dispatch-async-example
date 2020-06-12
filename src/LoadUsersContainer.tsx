import React from "react";
import { useDispatchAsync } from "react-redux-dispatch-async";
import { loadUsersRequest } from "./actions";

export const LoadUsersContainer = () => {
  const { status, result, error } = useDispatchAsync(loadUsersRequest);

  switch (status) {
    case "loading":
      return <div>loading...</div>;
    case "error":
      return <div>Expected error: {error!.message}</div>;
    case "success":
      return <div>{result}</div>;
    default:
      return null;
  }
};
