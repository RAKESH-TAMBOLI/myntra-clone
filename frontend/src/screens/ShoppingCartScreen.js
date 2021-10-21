import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    Grid,
    Text,
    Image,
    Button,
    Link,
    Divider,
    Select,
} from '@chakra-ui/react'
import { FaTrashAlt, FaHeart } from 'react-icons/fa'
import Message from '../components/Message'
import { addToCart, removeCart } from '../actions/cartActions'

const ShoppingCartScreen = ({ match, location, history }) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = id => {
        dispatch(removeCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Grid gridTemplateColumns='3'>
            <div>
                <div>
                    <Text>My Shopping Bag</Text>
                    Cart (
                    {cartItems.reduce(
                        (acc, currItem) => acc + (currItem.qty || 1),
                        0
                    )}
                    item)
                </div>
                {cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty.
                        <Link as={RouterLink} to='/'>
                            Go Back
                        </Link>
                    </Message>
                ) : (
                    <Grid mt='2' templateColumns={{ sm: '1fr', lg: '5fr 3fr' }}>
                        <div class='flex flex-col'>
                            {cartItems.map(item => (
                                <Grid
                                    templateColumns='1fr 5fr'
                                    borderRadius='md'>
                                    <div class=' ml-1'>
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            borderRadius='md'
                                        />
                                    </div>
                                    <div class='ml-2 '>
                                        <div class='flex mt-2 flex-row justify-between'>
                                            <Text class='font-semibold'>
                                                {item.name}
                                            </Text>

                                            <Select
                                                mr='5'
                                                value={item.qty}
                                                onChange={e =>
                                                    dispatch(
                                                        addToCart(
                                                            item.product,
                                                            Number(
                                                                e.target.value
                                                            )
                                                        )
                                                    )
                                                }
                                                width='20'>
                                                {[
                                                    ...Array(
                                                        item.countInStock
                                                    ).keys(),
                                                ].map(x => (
                                                    <option
                                                        key={x + 1}
                                                        value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Select>
                                        </div>
                                        <Text class='uppercase text-gray-500'>
                                            Brand: {item.brand}
                                        </Text>
                                        <Text class='uppercase text-gray-500 mt-1 '>
                                            {item.categories} - {item.color}
                                        </Text>
                                        <Text class='uppercase text-gray-500 mt-1'>
                                            Color: {item.color}
                                        </Text>

                                        <div class='mt-3 mb-3'>
                                            <div class='flex flex-row items-center '>
                                                <Link
                                                    as={RouterLink}
                                                    class='text-gray-500'
                                                    _hover='none'>
                                                    <Button
                                                        w='40'
                                                        onClick={() =>
                                                            removeFromCartHandler(
                                                                item.product
                                                            )
                                                        }
                                                        alignItems='center'
                                                        leftIcon={
                                                            <FaTrashAlt />
                                                        }
                                                        variant='unstyled'
                                                        boxShadow='md'>
                                                        REMOVE ITEM
                                                    </Button>
                                                </Link>

                                                <Button
                                                    ml='10'
                                                    w='48'
                                                    alignItems='center'
                                                    leftIcon={<FaHeart />}
                                                    variant='unstyled'
                                                    boxShadow='md'>
                                                    MOVE TO WISHLIST
                                                </Button>
                                                <div class='ml-44 text-gray-500'>
                                                    <Text>₹ {item.price}</Text>
                                                </div>
                                            </div>
                                        </div>
                                        <Divider class='mb-3' />
                                    </div>
                                </Grid>
                            ))}
                        </div>
                        <div class='ml-5'>
                            <div class='xs:hidden lg:block'>
                                <Text class='font-semibold uppercase'>
                                    gifting & personalisation
                                </Text>
                                <div class='w-72 bg-red-50 rounded-md mt-2'>
                                    <Text class='font-bold ml-2'>
                                        Buying for a loved one?
                                    </Text>
                                    <Text class='text-gray-700 ml-2'>
                                        Gift wrap and personalised message on
                                        card, Only for ₹ 25
                                    </Text>
                                    <Text class='uppercase ml-2 mt-3 mb-2 font-bold text-sm text-red-500'>
                                        add gift wrap
                                    </Text>
                                </div>
                                <Divider />
                                <div class='w-72'>
                                    <Text class='font-semibold text-red-500 mt-4'>
                                        Price Details (
                                        {cartItems.reduce(
                                            (acc, currItem) =>
                                                acc + (currItem.qty || 1),
                                            0
                                        )}{' '}
                                        item )
                                    </Text>
                                    <div>
                                        <div class='flex justify-between mt-2'>
                                            <Text>Coupon Discount</Text>
                                            <Text>Apply Coupon</Text>
                                        </div>
                                        <div class='flex justify-between mt-2'>
                                            <Text>Convenience Fee</Text>
                                            <Text> - ₹99</Text>
                                        </div>
                                        <div class='flex justify-between mt-2'>
                                            <Text class='font-semibold text-red-700'>
                                                Total Amount
                                            </Text>
                                            <Text class='font-semibold text-red-700'>
                                                ₹
                                                {cartItems.reduce(
                                                    (acc, currItem) =>
                                                        acc +
                                                        (currItem.qty || 1) *
                                                            currItem.price,
                                                    0
                                                )}
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='w-72'>
                                <Button
                                    onClick={checkoutHandler}
                                    w='full'
                                    colorScheme='red'>
                                    process
                                </Button>
                            </div>
                        </div>
                    </Grid>
                )}
            </div>
        </Grid>
    )
}

export default ShoppingCartScreen
