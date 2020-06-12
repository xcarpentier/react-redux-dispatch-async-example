import React from "react";
import { useDispatchAsync } from "react-redux-dispatch-async";
import { getUserRequest } from "./actions";

export const UserContainer = ({ id }: { id: string }) => {
  const { status, result, error } = useDispatchAsync<{
    id: string;
    name: string;
  }>(getUserRequest, [id]);

  switch (status) {
    case "loading":
      return <div>loading...</div>;
    case "error":
      return <div>{error!.message}</div>;
    case "success":
      return (
        <div>
          {result!.id} - {result!.name}
        </div>
      );
    default:
      return null;
  }
};
