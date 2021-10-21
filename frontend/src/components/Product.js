import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Image, Heading, Text } from '@chakra-ui/react'

const Product = ({ product }) => {
    return (
        <Link
            as={RouterLink}
            to={`/product/${product._id}`}
            class='hover:shadow-md focus:no-underline'>
            <div class='xs:w-40 lg:w-52 rounded-lg bg-white overflow-hidden transition-all xs:h-80 lg:h-96'>
                <Image
                    src={product.img}
                    alt={product.name}
                    class='h-60 w-full object-cover'
                />
                <div class='flex flex-col justify-between h-10'>
                    <Heading as='h4' class='text-lg font-semibold text-black'>
                        {product.brand}
                    </Heading>
                    <p class='break-all text-sm text-gray-500'>
                        {product.name}
                    </p>
                    <Text class='text-sm font-bold'>₹ {product.price}</Text>
                </div>
            </div>
        </Link>
    )
}
export default Product
