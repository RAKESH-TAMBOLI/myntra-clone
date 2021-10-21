import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Button,
    Flex,
    Heading,
    Icon,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
} from '@chakra-ui/react'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { listOrders } from '../actions/orderActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const OrderListScreen = ({ history }) => {
    const dispatch = useDispatch()

    // get orderList state from our store
    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    // Bring in the login state to get the current user login info
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        // if admin true dispatch listOrders otherwise go to login
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            // redirect to login page if not an admin
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    return (
        <>
            <Heading as='h1' fontSize='3xl' mb='5'>
                Orders
            </Heading>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message type='error'>{error}</Message>
            ) : (
                <Box bgColor='white' rounded='lg' shadow='lg' px='5' py='5'>
                    <Table variant='striped' colorScheme='gray' size='sm'>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>USER</Th>
                                <Th>DATE</Th>
                                <Th>TOTAL PRICE</Th>
                                <Th>PAID</Th>
                                <Th>DELIVERED</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {orders.map(order => (
                                <Tr key={order._id}>
                                    <Td>{order._id}</Td>
                                    <Td>{order.user && order.user.name}</Td>
                                    <Td>{order.createdAt.substring(0, 10)}</Td>
                                    <Td>₹{order.totalPrice}</Td>
                                    <Td>
                                        {order.isPaid ? (
                                            order.paidAt.substring(0, 10)
                                        ) : (
                                            <Icon
                                                as={IoCloseCircleSharp}
                                                color='red.600'
                                                w='8'
                                                h='8'
                                            />
                                        )}
                                    </Td>
                                    <Td>
                                        {order.isDelivered ? (
                                            order.deliveredAt.substring(0, 10)
                                        ) : (
                                            <Icon
                                                as={IoCloseCircleSharp}
                                                color='red.600'
                                                w='8'
                                                h='8'
                                            />
                                        )}
                                    </Td>
                                    <Td>
                                        <Flex
                                            justifyContent='flex-end'
                                            alignItems='center'>
                                            <Button
                                                mr='4'
                                                as={RouterLink}
                                                to={`/order/${order._id}`}
                                                colorScheme='teal'>
                                                Details
                                            </Button>
                                        </Flex>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            )}
        </>
    )
}

export default OrderListScreen
