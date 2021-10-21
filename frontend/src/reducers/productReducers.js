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
    PRODUCT_CREATE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,
} from '../constants/productConstants'

// all product
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        // product list request
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state // return the initial state
    }
}

// brand product
export const brandListReducers = (state = { brandProducts: [] }, action) => {
    switch (action.type) {
        // product list request
        case BRAND_LIST_REQUEST:
            return { loading: true, brandProducts: [] }
        case BRAND_LIST_SUCCESS:
            return { loading: false, brandProducts: action.payload }
        case BRAND_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state // retrun the initial state
    }
}

// categories product
export const categoriesListReducers = (
    state = { categoriesProducts: [] },
    action
) => {
    switch (action.type) {
        case CATEGORIES_LIST_REQUEST:
            return { loading: true, categoriesProducts: [] }
        case CATEGORIES_LIST_SUCCESS:
            return { loading: false, categoriesProducts: action.payload }
        case CATEGORIES_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// colors products
export const colorListReducers = (state = { colorProducts: [] }, action) => {
    switch (action.type) {
        case COLOR_LIST_REQUEST:
            return { loading: true, colorProducts: [] }
        case COLOR_LIST_SUCCESS:
            return { loading: false, colorProducts: action.payload }
        case COLOR_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// gernder products
export const genderListReducers = (state = { genderProducts: [] }, action) => {
    switch (action.type) {
        case GENDER_LIST_REQUEST:
            return { loading: true, genderProducts: [] }
        case GENDER_LIST_SUCCESS:
            return { loading: false, genderProducts: action.payload }
        case GENDER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// single product details
export const productDetailsReducers = (
    state = { product: { reviews: [] } },
    action
) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// product delete
export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// product create
export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_RESET:
            return {}
        default:
            return state
    }
}

// empty product object in the state
export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_UPDATE_RESET:
            return { product: {} }
        default:
            return state
    }
}

export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}
