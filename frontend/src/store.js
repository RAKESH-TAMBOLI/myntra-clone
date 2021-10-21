import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    brandListReducers,
    categoriesListReducers,
    colorListReducers,
    genderListReducers,
    productDetailsReducers,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productListReducer,
    productReviewCreateReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userDeleteReducer,
    userUpdateReducer,
    userListReducer,
} from './reducers/userReducers'
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderMyListReducer,
    orderListReducer,
    orderDeliverReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
    brandList: brandListReducers,
    categoriesList: categoriesListReducers,
    colorList: colorListReducers,
    genderList: genderListReducers,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer, // added it here for consistancy
    productDetails: productDetailsReducers,
    productReviewCreate: productReviewCreateReducer,
    productList: productListReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMyList: orderMyListReducer,
    orderDeliver: orderDeliverReducer,
    orderList: orderListReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
})

// Get any item that is present in  localStorage
const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
// Get any user that is present in localStorage
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

// check for shipping address in localStorage
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
