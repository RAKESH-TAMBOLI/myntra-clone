import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Box,
    Flex,
    Heading,
    Link,
    Spacer,
    Icon,
    CheckboxGroup,
    HStack,
    Checkbox,
    Divider,
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'

const Filter = () => {
    return (
        <Box w='56'>
            {/* Filter head  */}
            <Flex alignItems='center'>
                <Heading as='h3' class=' font-semibold text-2xl uppercase'>
                    filter
                </Heading>
                <Spacer />
                <Link
                    as={RouterLink}
                    class='text-red-500 font-semibold ml-7 uppercase'>
                    Clear all
                </Link>
            </Flex>
            {/* categories  */}
            <Box border='1px' borderColor='gray.200'>
                <div class='flex  flex-col mb-3'>
                    <div class='flex flex-row justify-between'>
                        <Heading
                            as='h3'
                            class='ml-3 mt-3 font-semibold text-md uppercase tracking-wider'>
                            categories
                        </Heading>
                        <div class='flex mr-4 mt-2 items-center justify-center rounded-full h-8 w-8 bg-gray-200'>
                            <Link as={RouterLink} class='text-gray-400'>
                                <Icon as={BiSearch} class='text-xl' />
                            </Link>
                        </div>
                    </div>
                    <CheckboxGroup colorScheme='green'>
                        <HStack class='flex flex-col mt-3 ml-3 mb-3'>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/shirt'
                                value='shirt'>
                                Shirt
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/jeans'
                                value='jeans'>
                                Jeans
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/tshirt'
                                value='tshirts'>
                                Tshirts
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/jacket'
                                value='jackets'>
                                Jackets
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/casualshoes'
                                value='casualShoes'>
                                Casual Shoes
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/shorts'
                                value='shorts'>
                                Shorts
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/trousers'
                                value='trousers'>
                                Trousers
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/sweatshirt'
                                value='sweatShirts'>
                                Sweatshirts
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/saree'
                                value='saree'>
                                Saree
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/categories/dress'
                                value='dress'>
                                Dress
                            </Checkbox>
                        </HStack>
                    </CheckboxGroup>
                    <Divider />
                    {/* Price  */}
                    <Heading
                        as='h3'
                        class='ml-3 mt-3 font-semibold text-md uppercase tracking-wider'>
                        Price
                    </Heading>
                    <CheckboxGroup colorScheme='green'>
                        <HStack class='flex flex-col mt-3 ml-3 mb-3 '>
                            <Checkbox value='248-669'>
                                Rs.249 to Rs.669
                            </Checkbox>
                            <Checkbox value='669-1089'>
                                Rs.669 to Rs.1089
                            </Checkbox>
                            <Checkbox value='1089-1509'>
                                Rs.1089 to Rs.1509
                            </Checkbox>
                            <Checkbox value='1509-1929'>
                                Rs.1509 to Rs.1929
                            </Checkbox>
                        </HStack>
                    </CheckboxGroup>
                    <Divider />
                    {/* color  */}
                    <Heading
                        as='h3'
                        class='ml-3 mt-3 font-semibold text-md uppercase tracking-wider'>
                        <span class='text-blue-800'>C</span>
                        <span class='text-red-800'>O</span>
                        <span class='text-red-800'>L</span>
                        <span class='text-gray-800'>R</span>
                        <span class='text-green-800'>O</span>
                    </Heading>
                    <CheckboxGroup colorScheme='green'>
                        <HStack class='flex flex-col mt-2 ml-3'>
                            <Checkbox
                                as={RouterLink}
                                to='/color/blue'
                                value='blue'
                                colorScheme='blue'>
                                Blue
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/color/black'
                                value='black'
                                colorScheme='blackAlpha'>
                                Black
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/color/red'
                                value='red'
                                colorScheme='red'>
                                Red
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/color/gray'
                                value='gray'
                                colorScheme='gray'>
                                Gray
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/color/green'
                                value='green'
                                colorScheme='green'>
                                Green
                            </Checkbox>
                            <Checkbox
                                as={RouterLink}
                                to='/color/pink'
                                value='pink'
                                colorScheme='pink'>
                                Pink
                            </Checkbox>
                        </HStack>
                    </CheckboxGroup>
                </div>
            </Box>
        </Box>
    )
}
export default Filter
