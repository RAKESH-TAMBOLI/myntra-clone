import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import {
    Button,
    Flex,
    Spacer,
    Grid,
    Text,
    Box,
    Image,
    Link,
} from '@chakra-ui/react'
import Message from '../components/Message'
import { createOrder } from '../actions/orderActions'
const PlaceOrderScreen = ({ history }) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    // calculate Prices
    cart.itemsPrice = cart.cartItems.reduce(
        (acc, currItem) => acc + currItem.price * (currItem.qty || 1),
        0
    )
    cart.shippingPrice = cart.itemsPrice > 1000 ? 1000 : 0
    cart.taxPrice = (12 * cart.itemsPrice) / 100
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice

    // get the orderCreate state from our store -> write this after placeOrderHandler
    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate
    console.log(order)

    const placeOrderHandler = () => {
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            })
        )
    }

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
        }
    }, [history, success])
    return (
        <Grid
            gridTemplateColumns={{ sm: '1fr', md: '4fr 1fr' }}
            py='5'
            gap='10'>
            <div class='border rounded-md'>
                <Text class='font-bold text-2xl ml-10 mt-3 tracking-wide'>
                    Personal Information
                </Text>
                <div class='flex justify-between xs:flex-col mx-2 lg:flex-row md:flex-row'>
                    {/* Name */}
                    <div class=' mt-5 ml-8 '>
                        <Text class='text-lg tracking-wider '>Full Name</Text>
                        <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                            {cart.shippingAddress.name}
                        </div>
                    </div>
                    {/* Email */}
                    <div>
                        <div class='xs:ml-8 mt-5'>
                            <Text class='text-lg tracking-wider'>Email</Text>
                            <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                                {cart.shippingAddress.email}
                            </div>
                        </div>
                    </div>
                </div>
                <Spacer h='3' />
                {/* phone number */}
                <div class=' mt-5 ml-9 '>
                    <Text class='text-lg tracking-wider'>Phone</Text>
                    <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                        {cart.shippingAddress.phone}
                    </div>
                </div>
                <Spacer h='10' />
                {/* Shipping Information  */}
                <div>
                    <Text class='font-bold text-2xl ml-9 tracking-wide'>
                        Shipping Information
                    </Text>
                    <div>
                        <div class=' mt-3 ml-9 '>
                            <Text class='text-lg tracking-wider'>Address</Text>
                            <div class='max-w-3xl flex items-center mt-2 pl-4 border rounded-md h-10 bg-gray-200'>
                                {cart.shippingAddress.address}
                            </div>
                        </div>
                        <div class='flex flex-wrap mt-3 justify-between xs:flex-col mx-2 lg:flex-row md:flex-row'>
                            {/* City */}
                            <div class=' mt-3 ml-8'>
                                <Text class='text-lg tracking-wider'>City</Text>
                                <div class='flex items-center pl-4 mt-3 w-80 border rounded-md h-10 bg-gray-200'>
                                    {cart.shippingAddress.city}
                                </div>
                            </div>
                            {/* Country */}
                            <div class=' mt-3 xs:ml-8'>
                                <Text class='text-lg tracking-wider'>
                                    Country
                                </Text>
                                <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                                    {cart.shippingAddress.country}
                                </div>
                            </div>
                            {/* Zip code */}
                            <div class=' mt-3 ml-8'>
                                {' '}
                                <Text class='text-lg tracking-wider'>
                                    Zip Code
                                </Text>
                                <div class='flex items-center pl-4 mt-2 w-80 border rounded-md h-10 bg-gray-200'>
                                    {cart.shippingAddress.postalCode}
                                </div>
                            </div>
                        </div>
                        <Spacer h='3' />
                    </div>
                </div>
                <Spacer h='10' />
            </div>
            {/* 2 Box  */}
            <div class='border rounded-md'>
                <Text class='text-2xl font-semibold ml-9'>Order Summary</Text>
                <Box mt='3'>
                    {cart.cartItems.length === 0 ? (
                        <Message>Your cart is empty</Message>
                    ) : (
                        <Box py='2'>
                            {cart.cartItems.map((item, index) => (
                                <Flex
                                    mb='4'
                                    key={index}
                                    alignItems='center'
                                    justifyContent='space-between'>
                                    <Flex alignItems='center'>
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            w='12'
                                            h='16'
                                            objectFit='cover'
                                            mr='1'
                                            ml='2'
                                        />
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
                        <Text class='font-bold'>₹{cart.itemsPrice}</Text>
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
                        <Text class='font-bold'>₹{cart.shippingPrice}</Text>
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
                        <Text class='font-bold'>₹{cart.taxPrice}</Text>
                    </Flex>
                    {/* Total price */}
                    <Flex
                        py='2'
                        mt='2'
                        mx='2'
                        alignItems='center'
                        justifyContent='space-between'>
                        <Text class='text-lg'>Total</Text>
                        <Text class='font-bold'>₹{cart.totalPrice}</Text>
                    </Flex>
                </Box>

                {/* Error Message */}
                {error && <Message type='error'>{error}</Message>}
                {/* </Box> */}
                <div class='xs:ml-10 lg:ml-0 xs:mb-5'>
                    <Button
                        w='60'
                        mt='5'
                        mx='1'
                        colorScheme='red'
                        type='button'
                        disabled={cart.cartItems === 0}
                        onClick={placeOrderHandler}>
                        Place Order
                    </Button>
                </div>
            </div>
        </Grid>
    )
}
export default PlaceOrderScreen
