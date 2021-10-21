import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    BRAND_LIST_REQUEST,
    BRAND_LIST_SUCCESS,
    BRAND_LIST_FAIL,
    CATEGORIES_LIST_REQUEST,
    CATEGORIES_LIST_SUCCESS,
    CATEGORIES_LIST_FAIL,
    COLOR_LIST_REQUEST,
    COLOR_LIST_SUCCESS,
    COLOR_LIST_FAIL,
    GENDER_LIST_REQUEST,
    GENDER_LIST_SUCCESS,
    GENDER_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,
} from '../constants/productConstants'

// We need Redux thunk here to add a function within a function
export const listProducts = () => async dispatch => {
    try {
        // dispatching this will make the reducer function to happen
        dispatch({ type: PRODUCT_LIST_REQUEST })

        //. make the request
        const { data } = await axios.get('/api/products')

        // dispatch the success action
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// Brand action
export const brandListProducts = brand => async dispatch => {
    try {
        // dispatching this will makle the reducer function to happen
        dispatch({ type: BRAND_LIST_REQUEST })
        // make the request
        const { data } = await axios.get(`/api/shopProducts/brand/${brand}`)
        console.log(data)
        // dispatch the success action
        dispatch({ type: BRAND_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: CATEGORIES_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// categories product
export const categoriesListProducts = categories => async dispatch => {
    try {
        dispatch({ type: CATEGORIES_LIST_REQUEST })
        // make the request
        const { data } = await axios.get(
            `/api/shopProducts/categories/${categories}`
        )
        // dispatch the success action
        dispatch({ type: CATEGORIES_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: BRAND_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// Color action
export const colorListProducts = color => async dispatch => {
    try {
        dispatch({ type: COLOR_LIST_REQUEST })
        // make the request
        const { data } = await axios.get(`/api/shopProducts/color/${color}`)
        // dispatch the success action
        dispatch({ type: COLOR_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: COLOR_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// gender action
export const genderListProduct = gender => async dispatch => {
    try {
        dispatch({ type: GENDER_LIST_REQUEST })
        // make the request
        const { data } = await axios.get(`/api/shopProducts/gender/${gender}`)
        // dispatch the success action
        dispatch({ type: GENDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: GENDER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// single product details
export const singelProductDetails = id => async dispatch => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        // make the request
        const { data } = await axios.get(`/api/shopProducts/product/${id}`)
        // dispatch the success action
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteProduct = id => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        // Set request headers.
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // Make the delete request
        await axios.delete(`/api/products/${id}`, config)

        dispatch({ type: PRODUCT_DELETE_SUCCESS })
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const createProduct = id => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        // Set request headers.
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // Make the delete request
        const { data } = await axios.post(`/api/products/`, {}, config)
        // Not sending any data here, as it's already hardcoded that in the backend

        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const updateProduct = product => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        // Set request headers.
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // Make the put request
        const { data } = await axios.put(
            `/api/products/${product._id}`,
            product,
            config
        )

        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// Will take the product ID and the review object that will
// have the rating and the comment
export const createProductReview =
    (productId, review) => async (dispatch, getState) => {
        try {
            dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST })

            const {
                userLogin: { userInfo },
            } = getState()

            // Set request headers.
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            await axios.post(
                `/api/products/${productId}/reviews`,
                review,
                config
            )

            dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS })
        } catch (error) {
            dispatch({
                type: PRODUCT_CREATE_REVIEW_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }
