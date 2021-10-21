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
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('') //new
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('') //new
    const [message, setMessage] = useState(null) //new

    // functionality
    const dispatch = useDispatch()

    // get the userRegister from your store
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = e => {
        e.preventDefault()
        // check if password are equal
        if (password !== confirmPassword) {
            setMessage('password do not match')
        } else {
            // dispatch Register
            dispatch(register(name, email, password, confirmPassword))
        }
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
                    <Heading as='h6' color='red.900'>
                        Sign UP
                    </Heading>
                </div>
                {message && <Message type='error'>{message}</Message>}
                {error && <Message type='error'>{error}</Message>}
                {/* Form */}
                <form onSubmit={submitHandler}>
                    <FormControl mt='10' id='name' isRequired>
                        <FormLabel>Enter Name</FormLabel>
                        <Input
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder='Enter Name'
                            w='96'
                        />
                    </FormControl>
                    <Spacer h='3' />
                    <FormControl id='email' isRequired>
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
                    <Spacer h='3' />
                    <FormControl id='confirmPassword' isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                            type='password'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder='Enter Password Again'
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
                        Register
                    </Button>
                </form>
                <div class='mt-5'>
                    <Text class='font-semibold'>
                        Have an acco unt?
                        <Link
                            _hover='none'
                            _focus='none'
                            as={RouterLink}
                            to={
                                redirect
                                    ? `/login?redirect=${redirect}`
                                    : '/login'
                            }>
                            Login
                        </Link>
                    </Text>
                </div>
            </Flex>
        </Flex>
    )
}
export default RegisterScreen
