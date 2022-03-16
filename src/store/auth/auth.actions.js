
import {USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actionType";

export const loginRequest = (payload) => ({
    type: USER_LOGIN_REQUEST,
    payload,
})

export const loginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload,
})

export const loginError = (error) => ({
    type: USER_LOGIN_ERROR,
    payload: error,
})

export const logout = () => ({
    type: USER_LOGOUT,
})