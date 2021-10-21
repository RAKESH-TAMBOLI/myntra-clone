import React from 'react'
import { Flex, Box, Link, Heading, Image, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { ImInstagram } from 'react-icons/im'

const Footer = () => {
    return (
        <div class='xs:hidden lg:block'>
            <Flex as='footer' justify='space-between' mt='16'>
                {/* Online Shopping  */}
                <Flex flexDir='column' ml='4'>
                    <Heading
                        as='h6'
                        fontSize='sm'
                        textTransform='uppercase'
                        ml='4'>
                        Online Shopping
                    </Heading>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Men
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Women
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Kids
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Home & Living
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Beauty
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Gift Cards
                    </Link>
                </Flex>
                {/* useful Links */}
                <Flex flexDir='column'>
                    <Heading
                        as='h6'
                        fontSize='sm'
                        textTransform='uppercase'
                        ml='4'>
                        useful links
                    </Heading>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Contact Us
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        FAQ
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        T&C
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Teams Of Use
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Track Orders
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Shippping
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Cancellation
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Returns
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Whitehat
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Blog
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Careers
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Privacy policy
                    </Link>
                    <Link as={RouterLink} _hover='none' ml='4'>
                        Site Map
                    </Link>
                </Flex>
                {/* experience rmart app on mobile */}
                <Flex flexDir='column'>
                    <Heading
                        as='h6'
                        fontSize='sm'
                        textTransform='uppercase'
                        ml='4'>
                        experience rmart app on mobile
                    </Heading>
                    <Flex mt='6'>
                        <Box maxW='40'>
                            <Image
                                src='./homeScreenImages/google_play.jpg'
                                objectFit='cover'
                                ml='4'
                            />
                        </Box>
                        <Box maxW='36'>
                            <Image
                                src='./homeScreenImages/apple_store.jpg'
                                objectFit='cover'
                                ml='4'
                            />
                        </Box>
                    </Flex>
                    <Box mt='4'>
                        <Heading
                            as='h6'
                            fontSize='sm'
                            textTransform='uppercase'
                            ml='4'>
                            keep in touch
                        </Heading>
                        <Box mt='4'>
                            <Link as={RouterLink} _hover='none' _focus='none'>
                                <Icon
                                    as={AiFillFacebook}
                                    w={7}
                                    h={7}
                                    ml='4'
                                    color='gray'
                                />
                            </Link>
                            <Link as={RouterLink} _hover='none' _focus='none'>
                                <Icon
                                    as={AiOutlineTwitter}
                                    w={7}
                                    h={7}
                                    ml='2'
                                    color='gray'
                                />
                            </Link>
                            <Link as={RouterLink} _hover='none' _focus='none'>
                                <Icon
                                    as={AiFillYoutube}
                                    w={7}
                                    h={7}
                                    ml='2'
                                    color='gray'
                                />
                            </Link>
                            <Link as={RouterLink} _hover='none' _focus='none'>
                                <Icon
                                    as={ImInstagram}
                                    w={6}
                                    h={6}
                                    ml='2'
                                    color='gray'
                                />
                            </Link>
                        </Box>
                    </Box>
                </Flex>
                {/* 100% original and retun  */}
                <Flex ml='16' flexDir='column' mr='4'>
                    {/* 100% original  */}
                    <Box display='flex' flexDir='row'>
                        <Image
                            src='/homeScreenImages/original.jpg'
                            objectFit='cover'
                            w='16'
                            h='16'
                        />
                        <Heading
                            as='h6'
                            fontSize='md'
                            textTransform='uppercase'
                            ml='3'
                            mt='5'>
                            100% original
                        </Heading>
                    </Box>
                    {/* 30days return  */}
                    <Box display='flex' flexDir='row'>
                        <Image
                            src='/homeScreenImages/30days.jpg'
                            objectFit='cover'
                            w='16'
                            h='16'
                        />
                        <Heading
                            as='h6'
                            fontSize='md'
                            textTransform='uppercase'
                            ml='3'
                            mt='5'>
                            Return within 30days
                        </Heading>
                    </Box>
                </Flex>
            </Flex>
        </div>
    )
}

export default Footer
