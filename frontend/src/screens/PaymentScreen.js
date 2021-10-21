import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Button,
    RadioGroup,
    HStack,
    Heading,
    Radio,
    FormControl,
    Text,
    Input,
    FormLabel,
    Flex,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { savePaymentMethod } from '../actions/cartActions'
const PaymentScreen = ({ history }) => {
    // get the cart from store
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    // redirect if no shipping address
    if (!shippingAddress) {
        history.push('/shipping')
    }

    // payment state
    const [paymentMethod, setPaymentMethod] = useState('debitCard')
    console.log(paymentMethod)

    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        // action dispatch to save payment method
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <div class='ml-10 mt-5 border shadow-md p-5 w-10/12 rounded-md'>
            <Heading class='text-3xl tracking-wider font-semibold' as='h1'>
                Payment Method
            </Heading>
            <form onSubmit={submitHandler}>
                <FormControl as='fieldset' mt='5'>
                    <FormLabel as='legend' fontSize='xl'>
                        Select Method
                    </FormLabel>
                    <RadioGroup defaultValue={paymentMethod}>
                        <HStack spacing='24px'>
                            <div class='mt-4'>
                                <div class='flex xs:flex-col lg:flex-row'>
                                    {/* debit */}
                                    <div class='border rounded-md h-16 xs:w-64 lg:w-72 flex items-center justify-between'>
                                        <Radio
                                            ml='3'
                                            value='debitCard'
                                            onChange={e =>
                                                setPaymentMethod(e.target.value)
                                            }>
                                            <Text class='mb-1 italic font-semibold text-lg tracking-wider'>
                                                Debit card
                                            </Text>
                                        </Radio>
                                        <Icon
                                            style={{
                                                fontSize: '24px',
                                                marginRight: '15px',
                                            }}
                                            icon='emojione:credit-card'
                                        />
                                    </div>
                                    {/* razorpay */}
                                    <div class='border rounded-md xs:mt-2 h-16 xs:ml-0 lg:ml-4 xs:w-64 lg:w-72 flex items-center justify-between'>
                                        <Radio
                                            ml='3'
                                            value='Razorpay'
                                            onChange={e =>
                                                setPaymentMethod(e.target.value)
                                            }>
                                            <Text class='mb-1 italic font-semibold text-lg tracking-wider'>
                                                razorpay
                                            </Text>
                                        </Radio>
                                        <Icon
                                            style={{
                                                fontSize: '24px',
                                                marginRight: '15px',
                                            }}
                                            icon='simple-icons:razorpay'
                                        />
                                    </div>
                                    {/* paypal  */}
                                    <div class='border rounded-md xs:mt-2 h-16 xs:ml-0 lg:ml-4 xs:w-64 lg:w-72 flex items-center justify-between'>
                                        <Radio
                                            ml='3'
                                            value='paypal'
                                            onChange={e =>
                                                setPaymentMethod(e.target.value)
                                            }>
                                            <Text class='mb-1 italic font-semibold text-lg tracking-wider'>
                                                paypal
                                            </Text>
                                        </Radio>
                                        <Icon
                                            style={{
                                                fontSize: '24px',
                                                marginRight: '15px',
                                            }}
                                            icon='cib:paypal'
                                        />
                                    </div>
                                </div>
                                {/* bank details  */}
                                <div class=' xs:hidden lg:block flex flex-col mt-5'>
                                    <Flex>
                                        <div class='mr-14'>
                                            <FormLabel>Holder Name</FormLabel>
                                            <Input
                                                width='72'
                                                type='text'
                                                placeholder='holder name'
                                            />
                                        </div>
                                        <div>
                                            <FormLabel>Card Number</FormLabel>
                                            <Input
                                                width='72'
                                                type='number'
                                                placeholder='Card Number'
                                            />
                                        </div>
                                    </Flex>

                                    <Flex mt='5'>
                                        <div class='mr-14'>
                                            <FormLabel>Expiry Date</FormLabel>
                                            <Input
                                                width='72'
                                                type='text'
                                                placeholder='Example 4/25'
                                            />
                                        </div>
                                        <div>
                                            <FormLabel>cvv</FormLabel>
                                            <Input
                                                width='72'
                                                type='number'
                                                placeholder='cvv'
                                            />
                                        </div>
                                    </Flex>
                                </div>
                            </div>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <Button type='submit' mt='4' colorScheme='red'>
                    Continue
                </Button>
            </form>
        </div>
    )
}
export default PaymentScreen
