import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Button,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Spacer,
    Grid,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Icon,
    Link,
} from '@chakra-ui/react'
import { IoWarning } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import UserSider from '../components/UserSider'

const ProfileScreen = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails
    console.log(user)

    // bring user login as if the user is not logged in
    // we don't him/her to see this page
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderMyList = useSelector(state => state.orderMyList)
    const { loading: loadingOrders, error: errorOrders, orders } = orderMyList

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [history, UserSider, userInfo, dispatch, user])

    const submitHandler = e => {
        e.preventDefault()
        // check if passwords are equal
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            // DISPATCH UPDATE PROFILE
            dispatch(updateUserProfile({ id: user._id, name, email, password })) // because _id will be invalid
        }
    }

    return (
        <Grid
            gridTemplateColumns={{ sm: '1fr', md: '1fr 6fr' }}
            py='5'
            gap='10'>
            <div class='xs:hidden w-64 lg:block sm:block md:block'>
                <UserSider />
            </div>
            <div>
                <div>
                    <Flex
                        bgColor='white'
                        boxShadow='md'
                        rounded='md'
                        p='10'
                        h='full'
                        direction='column'>
                        <Heading
                            class='xs:text-md  lg:text-3xl font-semibold'
                            as='h2'
                            mb='8'
                            fontSize='3xl'>
                            Personal Information
                        </Heading>
                        {message && <Message type='error'>{message}</Message>}
                        {error && <Message type='error'>{error}</Message>}
                        {success && (
                            <Message type='success'>Profile updated</Message>
                        )}
                        <form onSubmit={submitHandler}>
                            <FormControl id='name'>
                                <FormLabel fontSize='lg' pb='1'>
                                    Name
                                </FormLabel>
                                <Input
                                    type='text'
                                    placeholder='Enter Full Name'
                                    value={name}
                                    bgColor='gray.50'
                                    color='gray.600'
                                    h='14'
                                    // w='96'
                                    w={{ lg: '96' }}
                                    onChange={e => setName(e.target.value)}
                                />
                            </FormControl>
                            <Spacer h='3' />
                            <FormControl id='email'>
                                <FormLabel fontSize='lg' pb='1' pt='2'>
                                    Email Address
                                </FormLabel>
                                <Input
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    w={{ lg: '96' }}
                                    bgColor='gray.50'
                                    color='gray.600'
                                    h='14'
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <Spacer h='3' />
                            <FormControl id='password'>
                                <FormLabel fontSize='lg' pb='1' pt='2'>
                                    Password
                                </FormLabel>
                                <Input
                                    type='password'
                                    placeholder='Enter password'
                                    value={password}
                                    w={{ lg: '96' }}
                                    bgColor='gray.50'
                                    color='gray.600'
                                    h='14'
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </FormControl>
                            <Spacer h='3' />
                            <FormControl id='confirmPassword'>
                                <FormLabel fontSize='lg' pb='1' pt='2'>
                                    Confirm Password
                                </FormLabel>
                                <Input
                                    type='password'
                                    placeholder='Enter password Again'
                                    value={confirmPassword}
                                    w={{ lg: '96' }}
                                    bgColor='gray.50'
                                    color='gray.600'
                                    h='14'
                                    onChange={e =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </FormControl>
                            <Button
                                isLoading={loading}
                                type='submit'
                                mt='6'
                                pl='8'
                                pr='8'
                                colorScheme='red'>
                                Update
                            </Button>
                        </form>
                    </Flex>
                </div>
                {/* order details  */}
                <div class='mt-5 xs:hidden lg:block sm:block md:block'>
                    <Heading as='h5' mb='8'>
                        My Orders
                    </Heading>
                    {loadingOrders ? (
                        <Loader />
                    ) : errorOrders ? (
                        <Message type='error'>{errorOrders}</Message>
                    ) : (
                        <Table variant='striped'>
                            <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>DATE</Th>
                                    <Th>TOTAL</Th>
                                    <Th>PAID</Th>
                                    <Th>DELIVERED</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {orders.map(order => (
                                    <Tr key={order._id}>
                                        <Td>{order._id}</Td>
                                        <Td>
                                            {order.createdAt.substring(0, 10)}
                                        </Td>
                                        <Td>{order.totalPrice}</Td>
                                        <Td>
                                            {order.isPaid ? (
                                                order.paidAt.substring(0, 10)
                                            ) : (
                                                <Icon
                                                    as={IoWarning}
                                                    color='red'
                                                />
                                            )}
                                        </Td>
                                        <Td>
                                            {order.isDelivered ? (
                                                order.deleveredAt.substring(
                                                    0,
                                                    10
                                                )
                                            ) : (
                                                <Icon
                                                    as={IoWarning}
                                                    color='red'
                                                />
                                            )}
                                        </Td>
                                        <Td>
                                            <Link
                                                as={RouterLink}
                                                to={`/order/${order._id}`}>
                                                <Button
                                                    colorScheme='teal'
                                                    size='sm'>
                                                    Details
                                                </Button>
                                            </Link>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    )}
                </div>
            </div>
        </Grid>
    )
}

export default ProfileScreen
