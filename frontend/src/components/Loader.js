import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

const Loader = () => {
    return (
        <Flex alignItems='center' justifyContent='center'>
            <Spinner size='xl' label='loading'></Spinner>
        </Flex>
    )
}
export default Loader
