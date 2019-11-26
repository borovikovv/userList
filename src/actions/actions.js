import {
    CLEAR_USER, DELETE_USER, ERROR,
    USER_REQUESTED, USERS_REQUESTED
} from "../constans/constans";
import { userAPI } from "../api/api";


export const usersRequestedAC = (users) => ({
    type: USERS_REQUESTED,
    payload: users
});

export const userRequestedAC = (user) => ({
    type: USER_REQUESTED,
    payload: user
});

export const deleteUserAC = (user) => ({
   type: DELETE_USER,
    payload: user
});

export const loadingError = (error) => ({
    type: ERROR,
    payload: error
});

export const clearUserAC = () => ({
    type: CLEAR_USER
});

export const editUser = (data) => (dispatch) => {
  userAPI.editUser(data)
      .then(resolve => console.log(resolve))
      .catch(error =>  dispatch(loadingError(error)));
};

export const createUser = (user) => (dispatch) => {
    userAPI.createUser(user)
        .then(resolve => console.log(resolve))
        .catch(error =>  dispatch(loadingError(error)));
};

export const deleteUser = (id) => (dispatch) => {
    userAPI.deleteUser(id)
        .then(resolve => resolve)
        .catch(error =>  dispatch(loadingError(error)));
};

export const usersRequest = () => (dispatch) => {
    userAPI.requestUsers()
        .then(resolve => {
            dispatch(usersRequestedAC(resolve));
        })
        .catch(error =>  dispatch(loadingError(error)));
};

export const requestUser = (id) => (dispatch) => {
    userAPI.requestUser(id)
        .then(resolve => dispatch(userRequestedAC(resolve)))
        .catch(error =>  dispatch(loadingError(error)));
};

