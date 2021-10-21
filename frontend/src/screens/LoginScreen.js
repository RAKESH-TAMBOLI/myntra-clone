import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Button,
    Link,
    Input,
    FormControl,
    FormLabel,
    Flex,
    Spacer,
    Text,
    Heading,
    Divider,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // functionality
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin
    const redirect = location.search ? location.search.split('=')[1] : '/'

    // If the user data/token already exists then just redirect
    // the user to where ever it is it want to go
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, redirect, userInfo])

    const submitHandler = e => {
        e.preventDefault()
        //Dispatch LOGIN
        dispatch(login(email, password))
    }

    return (
        <Flex w='full' alignItems='center' justifyContent='center' p='10'>
            <Flex
                direction='column'
                boxShadow='lg'
                rounded='md'
                p='10'
                width='lg'>
                <div class='flex items-center'>
                    <Divider />
                    <Heading as='h6' color='red.900'>
                        Login
                    </Heading>
                    <Divider />
                </div>
                {error && <Message type='error'>{error}</Message>}
                {/* Form */}
                <form onSubmit={submitHandler}>
                    <FormControl mt='10' id='email' isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Enter Email'
                            w='96'
                        />
                    </FormControl>
                    <Spacer h='3' />
                    <FormControl id='password' isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Enter Password'
                            w='96'
                        />
                    </FormControl>
                    <Button
                        type='submit'
                        isLoading={loading}
                        mt='4'
                        w='96'
                        fontSize='xl'
                        colorScheme='red'>
                        Login
                    </Button>
                </form>
                <div class='mt-5'>
                    <Text class='font-semibold'>
                        Not a member?
                        <Link
                            _hover='none'
                            _focus='none'
                            as={RouterLink}
                            to={
                                redirect
                                    ? `/register?redirect=${redirect}`
                                    : '/register'
                            }>
                            Signup Now
                        </Link>
                    </Text>
                </div>
            </Flex>
        </Flex>
    )
}
export default LoginScreen
