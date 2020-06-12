export const getUserRequest = (id: string) => ({
  type: 'GET_USER_REQUESTED',
  payload: id,
})

export const getUserSuccess = ({ id, name }: { id: string; name: string }) => ({
  type: 'GET_USER_SUCCEEDED',
  payload: { id, name },
})

export const loadUsersRequest = () => ({
  type: 'LOAD_USERS_REQUESTED',
  payload: undefined,
})

export const loadUsersFailure = (error: Error) => ({
  type: 'LOAD_USERS_FAILED',
  payload: error,
})
