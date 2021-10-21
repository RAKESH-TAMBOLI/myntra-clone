import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
} from '@chakra-ui/react'

const CheckOutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <div class='xs:w-90 lg:w-full'>
            <Flex justifyContent='center' mb='8'>
                <Breadcrumb separator='-->'>
                    <BreadcrumbItem fontSize='lg'>
                        {step1 ? (
                            <BreadcrumbLink as={RouterLink} to='/login'>
                                Login
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbLink
                                disabled
                                color='gray.400'
                                _hover={{ textDeco: 'none' }}>
                                Login
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                    <BreadcrumbItem fontSize='lg'>
                        {step2 ? (
                            <BreadcrumbLink as={RouterLink} to='/shipping'>
                                Shipping
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbLink
                                disabled
                                color='gray.400'
                                _hover={{ textDeco: 'none' }}>
                                Shipping
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                    <BreadcrumbItem fontSize='lg'>
                        {step3 ? (
                            <BreadcrumbLink as={RouterLink} to='/payment'>
                                Payment
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbLink
                                disabled
                                color='gray.400'
                                _hover={{ textDeco: 'none' }}>
                                Payment
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                    <BreadcrumbItem fontSize='lg'>
                        {step4 ? (
                            <BreadcrumbLink as={RouterLink} to='/placeorder'>
                                Place Order
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbLink
                                disabled
                                color='gray.400'
                                _hover={{ textDeco: 'none' }}>
                                Place Order
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>
        </div>
    )
}

export default CheckOutSteps
