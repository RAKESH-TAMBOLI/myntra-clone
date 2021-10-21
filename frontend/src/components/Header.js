import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    Flex,
    Heading,
    Link,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    Text,
    Divider,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
} from '@chakra-ui/react'
// import { useDisclosure } from '@'
import { HiUser, HiUserCircle } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import { GiShoppingBag } from 'react-icons/gi'
import { BiHeart, BiLogOutCircle } from 'react-icons/bi'
import { ImGift } from 'react-icons/im'
import { IoChevronDown } from 'react-icons/io5'
import { RiCoupon3Fill } from 'react-icons/ri'
import { GoListOrdered } from 'react-icons/go'
import { logout } from '../actions/userActions'

const MenuItmes = ({ children, url }) => (
    <Link
        as={RouterLink}
        to={url}
        fontSize='sm'
        fontWeight='md'
        _focus='none'
        textTransform='uppercase'
        mr={5}
        display='block'>
        {children}
    </Link>
)

const MenuLinks = ({ children, url }) => (
    <Link
        as={RouterLink}
        to={url}
        class='mr-5 hover:no-underline focus:no-underline font-semibold'>
        {children}
    </Link>
)

const UserInfoLinks = ({ children, url }) => (
    <Link as={RouterLink} to={url} _hover='none' _focus='none'>
        {children}
    </Link>
)

const UserIconAndText = ({ children }) => (
    <div class='flex items-center ml-4'>{children}</div>
)

const Header = () => {
    const [show, setShow] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('')

    // dispatch functionality
    const dispatch = useDispatch()

    // Get access to the userInfo state
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = e => {
        dispatch(logout())
    }

    return (
        <Flex
            as='header'
            align='center'
            justify='space-between'
            py='4'
            px='4'
            background='whiteAlpha.800'
            shadow='md'
            pos='fixed'
            w='100%'
            top='0'
            zIndex={2}>
            {/* Menu Icon  */}
            {/* Drower  */}
            <div class='lg:hidden md:block xs:block sm:block'>
                <Icon as={FiMenu} w={6} h={6} onClick={onOpen} />
                <title>Menu</title>
            </div>
            <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <Flex align='center'>
                            <Icon as={HiUser} w={6} h={6} mr='2' />{' '}
                            {userInfo ? <Text>{userInfo.name}</Text> : null}
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                        <div class='flex flex-col'>
                            <MenuLinks url='/gender/men'>Men</MenuLinks>
                            <MenuLinks url='/gender/women'>Women</MenuLinks>
                            <MenuLinks url='/gender/kids'>Kids</MenuLinks>
                            <MenuLinks url='/gender/men'>
                                Home & Living
                            </MenuLinks>
                            <MenuLinks url='/gender/men'>Beauty</MenuLinks>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            {/* Logo  */}
            <div class='flex'>
                <Heading
                    as='h1'
                    fontWeight='semibold'
                    // size='md'
                    fontSize='xx-large'
                    mr={{ md: '1rem', base: 0 }}>
                    <Link
                        as={RouterLink}
                        to='/'
                        _hover={{ textDecor: 'none' }}
                        _focus='none'>
                        rMart
                    </Link>
                </Heading>
            </div>

            <div class='xs:hidden sm:hidden lg:block'>
                <MenuLinks url='/gender/men'>Men</MenuLinks>
                <MenuLinks url='/gender/women'>Women</MenuLinks>
                <MenuLinks url='/gender/kids'>Kids</MenuLinks>
                <MenuLinks url='/gender/men'>Home & Living</MenuLinks>
                <MenuLinks url='/gender/men'>Beauty</MenuLinks>
            </div>

            <div class='flex'>
                <div class='mr-3 xs:hidden lg:block md:block'>
                    {userInfo ? (
                        <Menu>
                            <MenuButton>
                                {userInfo.name} <Icon as={IoChevronDown} />
                            </MenuButton>

                            <MenuList>
                                <UserInfoLinks url='/profile'>
                                    <UserIconAndText>
                                        <Icon as={HiUserCircle} w={5} h={5} />
                                        <Text class='font-semibold ml-3'>
                                            My Profile
                                        </Text>
                                    </UserIconAndText>
                                </UserInfoLinks>
                                <Divider mt='3' mb='3' />
                                <UserInfoLinks url='/order/myorders'>
                                    <UserIconAndText>
                                        <Icon as={GoListOrdered} w={5} h={5} />
                                        <Text class='font-semibold ml-3'>
                                            Orders
                                        </Text>{' '}
                                    </UserIconAndText>
                                </UserInfoLinks>
                                <Divider mt='3' mb='3' />
                                <UserInfoLinks url='/'>
                                    <UserIconAndText>
                                        <Icon as={BiHeart} w={5} h={5} />
                                        <Text class='font-semibold ml-3'>
                                            Whishlist
                                        </Text>
                                    </UserIconAndText>
                                </UserInfoLinks>
                                <Divider mt='3' mb='3' />
                                <UserInfoLinks url='/'>
                                    <UserIconAndText>
                                        <Icon as={RiCoupon3Fill} />
                                        <Text class='font-semibold ml-3'>
                                            Coupons
                                        </Text>
                                    </UserIconAndText>
                                </UserInfoLinks>
                                <Divider mt='3' mb='3' />
                                <UserInfoLinks url='/'>
                                    <UserIconAndText>
                                        <Icon as={ImGift} w={5} h={5} />
                                        <Text class='font-semibold ml-3'>
                                            Gift Cards
                                        </Text>
                                    </UserIconAndText>
                                </UserInfoLinks>
                                <Divider mt='3' mb='3' />
                                <Link
                                    as={RouterLink}
                                    onClick={logoutHandler}
                                    _hover='none'
                                    _focus='none'>
                                    <UserIconAndText>
                                        <Icon as={BiLogOutCircle} w={5} h={5} />
                                        <Text class='font-semibold ml-3'>
                                            Logout
                                        </Text>
                                    </UserIconAndText>
                                </Link>
                            </MenuList>
                        </Menu>
                    ) : (
                        <MenuItmes url='/login'>
                            <Flex alignItems='center' flexDir='column'>
                                <Icon as={HiUser} w={6} h={6} mr='2' />
                            </Flex>
                        </MenuItmes>
                    )}
                    {/* Logic to handle showing */}
                    {userInfo && userInfo.isAdmin && (
                        <Menu>
                            <MenuButton
                                ml='5'
                                as={Link}
                                fontSize='sm'
                                fontWeight='semibold'
                                _hover={{
                                    textDecoration: 'none',
                                    opacity: '0.7',
                                }}
                                textTransform='uppercase'>
                                Manage <Icon as={IoChevronDown} />
                            </MenuButton>
                            <MenuList>
                                <UserInfoLinks url='/admin/userlist'>
                                    <UserIconAndText>
                                        <Text class='font-semibold ml-3'>
                                            All Users
                                        </Text>
                                    </UserIconAndText>
                                </UserInfoLinks>
                                <Divider mt='3' mb='3' />

                                <UserInfoLinks url='/admin/productlist'>
                                    <UserIconAndText>
                                        <Text class='font-semibold ml-3'>
                                            All Product
                                        </Text>
                                    </UserIconAndText>
                                </UserInfoLinks>
                                <Divider mt='3' mb='3' />

                                <UserInfoLinks url='/admin/orderlist'>
                                    <UserIconAndText>
                                        <Text class='font-semibold ml-3'>
                                            All Orders
                                        </Text>
                                    </UserIconAndText>
                                </UserInfoLinks>
                            </MenuList>
                        </Menu>
                    )}
                </div>
                {/* Whishlist icon   */}
                <MenuItmes url='/wishlist/'>
                    <Flex alignItems='center' flexDir='column'>
                        <Icon as={BiHeart} w={6} h={6} mr='2' />
                    </Flex>
                </MenuItmes>
                {/* Bag icon  */}
                <MenuItmes url='/cart'>
                    <Flex alignItems='center' flexDir='column'>
                        <Icon as={GiShoppingBag} w={6} h={6} mr='2' />
                    </Flex>
                </MenuItmes>
            </div>
        </Flex>
    )
}
export default Header
