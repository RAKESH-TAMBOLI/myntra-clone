import axios from 'axios'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

// cart Add itmes
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/shopProducts/product/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            img: data.img,
            brand: data.brand,
            price: data.price,
            countInStock: data.countInStock,
            qty,
            categories: data.categories,
            color: data.color,
        },
    })
    // console.log(data)
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeCart = id => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = data => dispatch => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = data => dispatch => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data })
    localStorage.setItem('paymentMethod', JSON.stringify(data))
}
