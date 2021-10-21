import React from 'react'
import { Icon, Flex, Text, Box } from '@chakra-ui/react'
import { TiStar, TiStarOutline, TiStarHalf } from 'react-icons/ti'

const Rating = ({ value, text, alignment, color = 'blue.500' }) => {
    return (
        <Flex
            alignItems='flex-start'
            direction={alignment === 'single' ? 'row' : 'column'}>
            <Box fontSize='x-large' lineHeight='1.3'>
                <Icon
                    color={color}
                    as={
                        value >= 1
                            ? TiStar
                            : value >= 0.5
                            ? TiStarHalf
                            : TiStarOutline
                    }
                />
                <Icon
                    color={color}
                    as={
                        value >= 2
                            ? TiStar
                            : value >= 1.5
                            ? TiStarHalf
                            : TiStarOutline
                    }
                />
                <Icon
                    color={color}
                    as={
                        value >= 3
                            ? TiStar
                            : value >= 2.5
                            ? TiStarHalf
                            : TiStarOutline
                    }
                />
                <Icon
                    color={color}
                    as={
                        value >= 4
                            ? TiStar
                            : value >= 3.5
                            ? TiStarHalf
                            : TiStarOutline
                    }
                />
                <Icon
                    color={color}
                    as={
                        value >= 5
                            ? TiStar
                            : value >= 4.5
                            ? TiStarHalf
                            : TiStarOutline
                    }
                />
            </Box>
            <Text
                class='text-md font-semibold mt-2 text-red-500'
                ml={alignment === 'single' ? 2 : 0}>
                {text && text}
            </Text>
        </Flex>
    )
}

export default Rating
