import axios from 'axios'
// import from 'express'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_DETAILS_RESET,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
} from '../constants/userConstants'
import { ORDER_MY_LIST_RESET } from '../constants/orderConstants'

// Login action to make a request and get a token
export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        // Set request headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            '/api/users/login',
            { email, password },
            config
        )

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        // Set user to localStorage
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            // copied form other file
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const logout = () => async dispatch => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: ORDER_MY_LIST_RESET })
    dispatch({ type: USER_LIST_RESET })
}

export const register = (name, email, password) => async dispatch => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })

        // Set request headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            '/api/users',
            { name, email, password },
            config
        )

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })

        // Immediately login the user upon registration
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        // Set user to localStorage
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            // copied form other file
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// getState gives the state -> we can get the token from here
export const getUserDetails = id => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState() // two level destructuring

        // Set request headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        const { data } = await axios.get(`/api/users/${id}`, config)
        // console.log(data)

        dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const updateUserProfile = user => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState() // two level destructuring

        // Set request headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(`/api/users/profile`, user, config)

        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listUsers = user => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState() // two level destructuring

        // Set request headers
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/users`, config)

        dispatch({ type: USER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteUsers = id => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DELETE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState() // two level destructuring

        // Set request headers
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/users/${id}`, config)

        dispatch({ type: USER_DELETE_SUCCESS })
    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const updateUser = user => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState() // two level destructuring

        // Set request headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(`/api/users/${user._id}`, user, config)

        dispatch({ type: USER_UPDATE_SUCCESS })

        // we also want to update this and pass the updated user data so it
        // trickles down to the state
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
