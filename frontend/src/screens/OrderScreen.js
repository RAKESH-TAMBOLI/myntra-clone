import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import axios from 'axios'
import {
    Button,
    Flex,
    Heading,
    Spacer,
    Grid,
    Text,
    Box,
    Link,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import Message from '../components/Message'
import {
    getOrderDetails,
    payOrder,
    deliverOrder,
} from '../actions/orderActions'
import {
    ORDER_DELIVER_RESET,
    ORDER_PAY_RESET,
} from '../constants/orderConstants'
import Loader from '../components/Loader'

const OrderScreen = ({ match, history }) => {
    // orderId
    const orderId = match.params.id

    const dispatch = useDispatch()

    // get the orderDetails state from our store
    const orderDetails = useSelector(state => state.orderDetails)
    const { order, loading, error } = orderDetails

    // get the orderPay state from state
    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay // renaming destructring

    // Get the orderDeliver state and the userLogin states
    const orderDeliver = useSelector(state => state.orderDeliver)
    const { loading: loadingDeliver, success: successDeliver } = orderDeliver

    // get the userLogin state from store
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // Calculate Items Price
    // If we don't put it in !loading we will get an error.
    if (!loading) {
        order.itemsPrice = order.orderItems.reduce(
            (acc, currItem) => acc + currItem.price * (currItem.qty || 1),
            0
        )
    }

    // Loading Razorpay sdk
    const loadScript = src => {
        return new Promise(resolve => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    const displayRazorpay = async () => {
        try {
            const res = await loadScript(
                'https://checkout.razorpay.com/v1/checkout.js'
            )

            if (!res) {
                alert('Razorpay SDK failed to load. Are you online?')
                return
            }
            // payment data to send backend
            const paymentData = {
                amount: order.totalPrice,
            }

            // creating a new order
            const result = await axios.post('/api/payment/proceed', paymentData)

            if (!result) {
                alert('Server error. Are you online?')
                return
            }

            // Getting the order details back
            const {
                amount,
                id: order_id,
                currency,
                status,
                created_at,
            } = result.data

            const options = {
                key: 'rzp_test_pQKETQaqfT5FtN', // Enter the Key ID generated from the Dashboard
                amount: amount.toString(),
                currency: currency,
                name: 'rMart',
                description: 'Buying Product',
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        razorpayOrderId: response.razorpay_order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpaySignature: response.razorpay_signature,
                        amount: amount.toString(),
                        status: status,
                        createId: created_at,
                    }
                    // make success request
                    const paymentResult = await axios.post(
                        '/api/payment/success',
                        data
                    )
                    // alert(paymentResult.data.msg)
                    // action dispatch payOrder immediately
                    dispatch(payOrder(orderId, paymentResult))
                },
                prefill: {
                    name: order.user.name,
                    email: order.shippingAddress.email,
                    contact: order.shippingAddress.phone,
                },
                notes: {
                    address: 'rMart Corporate Office',
                },
                theme: {
                    color: '#61dafb',
                },
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        // if user ont login push LoginScreen
        if (!userInfo) {
            history.push('/login')
        }
        if (!order || successPay || successDeliver) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch({ type: ORDER_DELIVER_RESET })
            dispatch(getOrderDetails(orderId))
        }
    }, [dispatch, orderId, successPay, order, successDeliver])

    const deliverHandler = () => {
        dispatch(deliverOrder(order))
    }

    return loading ? (
        <Loader />
    ) : error ? (
        <Message type='error'>{error}</Message>
    ) : (
        <div>
            <div>
                <Heading
                    class='lg:text-3xl xs:text-xl tracking-wider font-semibold'
                    as='h5'>
                    Order {order._id}
                </Heading>
            </div>
            <Grid
                gridTemplateColumns={{ sm: '1fr', md: '4fr 1fr' }}
                py='5'
                gap='10'>
                {/* 1 Box  */}
                <div class='border rounded-md'>
                    <Text class='font-bold text-2xl ml-10 mt-3 tracking-wide'>
                        Personal Information
                    </Text>
                    <div class='flex justify-between xs:flex-col mx-2 lg:flex-row md:flex-row'>
                        {/* Name */}
                        <div>
                            <div class=' mt-5 ml-8 '>
                                <Text class='text-lg tracking-wider '>
                                    <strong> Full Name</strong>{' '}
                                    {order.user.name}
                                </Text>
                                <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                                    {order.shippingAddress.name}
                                </div>
                            </div>
                        </div>
                        {/* Email */}
                        <div>
                            <div class='mt-5 xs:ml-8 '>
                                <Text class='text-lg tracking-wider'>
                                    Email
                                </Text>
                                <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                                    {order.shippingAddress.email}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Spacer h='3' />
                    {/* phone number */}
                    <div class=' mt-5 ml-9 '>
                        <Text class='text-lg tracking-wider'>Phone</Text>
                        <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                            {order.shippingAddress.phone}
                        </div>
                    </div>
                    <Spacer h='10' />
                    {/* Shipping Information  */}
                    <div>
                        <Text class='font-bold mb-4 text-2xl ml-9 tracking-wide'>
                            Shipping Information
                        </Text>
                        <div>
                            {order.isDelivered ? (
                                <Message type='success'>
                                    Delievered on {order.delieveredAt}
                                </Message>
                            ) : (
                                <Alert status='error'>
                                    <AlertIcon />
                                    <Box flex='1'>
                                        <AlertTitle>Not Delivered</AlertTitle>
                                        <AlertDescription display='block'>
                                            Thank you for shopping.Your Order
                                            was delivered within 7 days.
                                        </AlertDescription>
                                    </Box>
                                </Alert>
                            )}
                        </div>
                        <div>
                            <div class=' mt-3 ml-9 '>
                                <Text class='text-lg tracking-wider'>
                                    Address
                                </Text>
                                <div class='max-w-3xl flex items-center mt-2 pl-4 border rounded-md h-10 bg-gray-200'>
                                    {order.shippingAddress.address}
                                </div>
                            </div>
                            <div class='flex flex-wrap mt-3 justify-between xs:flex-col mx-2 lg:flex-row md:flex-row'>
                                {/* City */}
                                <div class=' mt-3 ml-8'>
                                    <Text class='text-lg tracking-wider'>
                                        City
                                    </Text>
                                    <div class='flex items-center pl-4 mt-3 w-80 border rounded-md h-10 bg-gray-200'>
                                        {order.shippingAddress.city}
                                    </div>
                                </div>
                                {/* Country */}
                                <div class=' mt-3 xs:ml-8 '>
                                    <Text class='text-lg tracking-wider'>
                                        Country
                                    </Text>
                                    <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                                        {order.shippingAddress.country}
                                    </div>
                                </div>
                                {/* Zip code */}
                                <div class=' mt-3 ml-8'>
                                    <Text class='text-lg tracking-wider'>
                                        Zip Code
                                    </Text>
                                    <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                                        {order.shippingAddress.postalCode}
                                    </div>
                                </div>
                            </div>
                            <Spacer h='3' />
                        </div>
                    </div>
                    <Spacer h='10' />
                    {/* payment method */}
                    <div>
                        <div class='mb-14'>
                            <Text class='text-xl font-semibold'>
                                Payment Method
                            </Text>
                            <span class='text-xl font-semibold'>Mathod:</span>
                            {order.paymentMethod}
                            {order.isPaid ? (
                                <Alert status='success'>
                                    <AlertIcon />
                                    <Box flex='1'>
                                        <AlertTitle>Success</AlertTitle>
                                        <AlertDescription display='block'>
                                            Paid on {order.paidAt}
                                        </AlertDescription>
                                    </Box>
                                </Alert>
                            ) : (
                                <Message type='error'>Not Paid</Message>
                            )}
                        </div>
                    </div>
                </div>
                {/* 2 Box  */}
                <div class='border rounded-md'>
                    <div>
                        <Text class='lg:text-2xl xs:text-3xl xs:ml-20 font-semibold lg:ml-10'>
                            Order Summary
                        </Text>
                        <Box mt='3'>
                            {order.orderItems.length === 0 ? (
                                <Message>Your cart is empty</Message>
                            ) : (
                                <Box py='2'>
                                    {order.orderItems.map((item, index) => (
                                        <Flex
                                            mb='4'
                                            key={index}
                                            alignItems='center'
                                            justifyContent='space-between'>
                                            <Flex alignItems='center'>
                                                <Link
                                                    mr='3'
                                                    as={RouterLink}
                                                    to={`/product/${item.product}`}
                                                    fontWeight='medium'
                                                    fontSize='xs'>
                                                    {item.name}
                                                </Link>
                                            </Flex>
                                            <Text
                                                fontSize='xs'
                                                fontWeight='semibold'
                                                pr='4'>
                                                {item.qty || 1} Qty = ₹
                                                {(item.qty || 1) * item.price}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Box>
                            )}
                            {/* Item prices */}
                            <Flex
                                borderBottom='1px'
                                py='2'
                                mt='2'
                                mx='2'
                                borderColor='gray.200'
                                alignItems='center'
                                justifyContent='space-between'>
                                <Text class='text-lg'>Items</Text>
                                <Text class='font-bold'>
                                    ₹{order.itemsPrice}
                                </Text>
                            </Flex>
                            {/* Shipping price */}
                            <Flex
                                borderBottom='1px'
                                py='2'
                                mt='2'
                                mx='2'
                                borderColor='gray.200'
                                alignItems='center'
                                justifyContent='space-between'>
                                <Text class='text-lg'>Shipping</Text>
                                <Text class='font-bold'>
                                    ₹{order.shippingPrice}
                                </Text>
                            </Flex>
                            {/* Tax price */}
                            <Flex
                                borderBottom='1px'
                                py='2'
                                mt='2'
                                mx='2'
                                borderColor='gray.200'
                                alignItems='center'
                                justifyContent='space-between'>
                                <Text class='text-lg'>Tax</Text>
                                <Text class='font-bold'>₹{order.taxPrice}</Text>
                            </Flex>
                            {/* Total price */}
                            <Flex
                                py='2'
                                mt='2'
                                mx='2'
                                alignItems='center'
                                justifyContent='space-between'>
                                <Text class='text-lg'>Total</Text>
                                <Text class='font-bold'>
                                    ₹{order.totalPrice}
                                </Text>
                            </Flex>
                        </Box>
                        {/* Error Message */}
                        {error && <Message type='error'>{error}</Message>}
                        <div class='xs:ml-14 lg:ml-0'>
                            <Button
                                w='60'
                                mt='5'
                                mx='1'
                                colorScheme='red'
                                type='button'
                                hidden={order.isPaid === true}
                                onClick={displayRazorpay}>
                                Order
                            </Button>
                            {/* For Admins only */}
                            <div class='xs:-ml-12'>
                                {loadingDeliver && <Loader />}
                                {userInfo &&
                                    userInfo.isAdmin &&
                                    order.isPaid &&
                                    !order.isDelivered && (
                                        <Button
                                            type='button'
                                            colorScheme='teal'
                                            ml='24'
                                            mb='4'
                                            onClick={deliverHandler}>
                                            Mark as delivered
                                        </Button>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    )
}
export default OrderScreen
