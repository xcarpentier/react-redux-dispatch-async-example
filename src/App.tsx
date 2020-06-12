import * as React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import { createReduxStore } from "./store";
import { UserContainer } from "./UserContainer";
import { LoadUsersContainer } from "./LoadUsersContainer";

const store = createReduxStore();

export default function App() {
  return (
    <Provider {...{ store }}>
      <UserContainer id={"1"} />
      <LoadUsersContainer />
    </Provider>
  );
}
