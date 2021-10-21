import React, { useState } from 'react'
import {
    Button,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Spacer,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import CheckOutSteps from '../components/CheckOutSteps'

const ShippingScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    console.log(shippingAddress)

    const [name, setName] = useState(shippingAddress.name || '')
    const [email, setEmail] = useState(shippingAddress.email || '')
    const [phone, setPhone] = useState(shippingAddress.phone || '')
    const [address, setAddress] = useState(shippingAddress.address || '')
    const [city, setCity] = useState(shippingAddress.city || '')
    const [postalCode, setPostalCode] = useState(
        shippingAddress.postalCode || ''
    )
    const [country, setCountry] = useState(shippingAddress.country || '')

    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        dispatch(
            saveShippingAddress({
                name,
                email,
                phone,
                address,
                city,
                postalCode,
                country,
            })
        )
        history.push('/payment')
    }

    return (
        <Flex
            w='full'
            alignItems='center'
            justifyContent='center'
            py='5'
            flexDir='column'>
            <CheckOutSteps step1 step2 />
            <Flex
                direction='column'
                boxShadow='lg'
                rounded='md'
                p='10'
                width='lg'>
                <div class='xs:w-80 xs:ml-10 lg:w-full lg:ml-0 '>
                    <Heading as='h1' mb='8' fontSize='3xl'>
                        Shipping
                    </Heading>
                    <form onSubmit={submitHandler}>
                        {/* Full Name */}
                        <FormControl id='name' isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input
                                type='text'
                                variant='filled'
                                placeholder='Full Name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </FormControl>
                        <Spacer h='3' />
                        {/* Address */}
                        <FormControl id='Address' isRequired>
                            <FormLabel>Address</FormLabel>
                            <Input
                                type='address'
                                variant='filled'
                                placeholder='Enter Address'
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                        </FormControl>
                        <Spacer h='3' />
                        {/* Postal Code */}
                        <FormControl id='postalCode' isRequired>
                            <FormLabel>Postal Code</FormLabel>
                            <Input
                                type='number'
                                variant='filled'
                                placeholder='Enter postal Code'
                                value={postalCode}
                                onChange={e => setPostalCode(e.target.value)}
                            />
                        </FormControl>
                        <Spacer h='3' />
                        {/* Country */}
                        <FormControl id='country' isRequired>
                            <FormLabel>Country</FormLabel>
                            <Input
                                type='text'
                                variant='filled'
                                placeholder='Enter country'
                                value={country}
                                onChange={e => setCountry(e.target.value)}
                            />
                        </FormControl>
                        {/* City */}
                        <FormControl id='city' isRequired>
                            <FormLabel>City</FormLabel>
                            <Input
                                type='text'
                                variant='filled'
                                placeholder='Enter city'
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </FormControl>
                        <Spacer h='3' />
                        {/* email */}
                        <FormControl id='email' isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type='email'
                                variant='filled'
                                placeholder='Enter Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <Spacer h='3' />
                        {/* phone number */}
                        <FormControl id='phone' isRequired>
                            <FormLabel>Phone</FormLabel>
                            <Input
                                type='phone'
                                variant='filled'
                                placeholder='Phone Number'
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </FormControl>
                        <Spacer h='3' />
                        <Button
                            type='submit'
                            mt='4'
                            px='10'
                            py='6'
                            colorScheme='red'>
                            Continue
                        </Button>
                    </form>
                </div>
            </Flex>
        </Flex>
    )
}

export default ShippingScreen
