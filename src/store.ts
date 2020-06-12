import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas";
import { createDispatchAsyncMiddleware } from "react-redux-dispatch-async";
import { createStore, applyMiddleware } from "redux";

export const createReduxStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger({
    level: {
      prevState: false,
      nextState: false
    }
  });
  const dispatchAsyncMiddleware = createDispatchAsyncMiddleware();

  const store = createStore(
    state => state,
    applyMiddleware(sagaMiddleware, loggerMiddleware, dispatchAsyncMiddleware)
  );

  sagaMiddleware.run(sagas);

  return store;
};
