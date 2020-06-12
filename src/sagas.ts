import { all, delay, put, takeEvery } from "redux-saga/effects";
import { getUserSuccess, loadUsersFailure } from "./actions";

export const sagas = function*() {
  yield all([
    takeEvery("GET_USER_REQUESTED", function*({ payload: id }: any) {
      yield delay(2000);
      yield put(getUserSuccess({ id, name: "Xavier" }));
    }),
    takeEvery("LOAD_USERS_REQUESTED", function*() {
      yield delay(3000);
      yield put(loadUsersFailure(new Error("load user failed")));
    })
  ]);
};
