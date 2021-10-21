import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box,
    Text,
    Link,
    Icon,
    List,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { RiInboxUnarchiveFill, RiArrowRightSLine } from 'react-icons/ri'
import { IoChatboxEllipsesSharp } from 'react-icons/io5'
import { GoFileDirectory } from 'react-icons/go'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiLogOutCircle } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
import { logout } from '../actions/userActions'

const UserSider = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // dispatch functionality
    const dispatch = useDispatch()
    const logoutHandler = e => {
        dispatch(logout())
    }
    return (
        <Box w='64'>
            <div>
                {/* user name  */}
                <div class='flex border pb-5 pt-5'>
                    {/* img */}
                    <Text class='text-gray-500 pl-4'>Hello,</Text>
                    <Text class='font-semibold tracking-wide pl-2'>
                        {userInfo ? userInfo.name : 'none'}
                    </Text>
                </div>
                <div>
                    {/* my orders */}
                    <div class='flex pl-3 mt-3 border pt-4 pb-4 items-center'>
                        <Icon
                            as={RiInboxUnarchiveFill}
                            w={6}
                            h={6}
                            color='blue.500'
                        />
                        <Text
                            as={RouterLink}
                            to='/'
                            class='ml-5 text-lg uppercase text-gray-500 font-semibold '>
                            my orders
                        </Text>
                        <Icon w={6} h={6} ml={5} as={RiArrowRightSLine} />
                    </div>
                    {/* account setting  */}
                    <div class='border pt-4 pb-4'>
                        <div class='flex pl-3 '>
                            <Icon
                                w={6}
                                h={6}
                                color='blue.500'
                                as={BsFillPersonFill}
                            />
                            <Text class=' text-md ml-5 uppercase text-gray-500 font-semibold '>
                                account setting
                            </Text>
                        </div>
                        <List ml={10}>
                            <UnorderedList
                                fontWeight='semibold'
                                fontSize='sm'
                                listStyleType='none'>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    profile information
                                </ListItem>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    Manage Address
                                </ListItem>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    PAN Card information
                                </ListItem>
                            </UnorderedList>
                        </List>
                    </div>
                    {/* payments */}
                    <div class='border pt-4 pb-4'>
                        <div class='flex pl-3 items-center'>
                            <Icon w={6} h={6} color='blue.500' as={MdPayment} />
                            <Text class='ml-5 text-lg uppercase text-gray-500 font-semibold '>
                                payments
                            </Text>
                        </div>
                        <List ml={10}>
                            <UnorderedList
                                fontWeight='semibold'
                                fontSize='sm'
                                listStyleType='none'>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    Gift Cards
                                </ListItem>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    Saved UPI
                                </ListItem>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    Saved cards
                                </ListItem>
                            </UnorderedList>
                        </List>
                    </div>
                    {/* my chart  */}
                    <div class='flex pl-3 pt-4 pb-4 border items-center '>
                        <Icon
                            w={6}
                            h={6}
                            color='blue.500'
                            as={GoFileDirectory}
                        />
                        <Text class='ml-5 text-lg uppercase text-gray-500 font-semibold '>
                            my chats
                        </Text>
                        <Icon w={6} h={6} ml={5} as={RiArrowRightSLine} />
                    </div>
                    {/* my stuff  */}
                    <div class='border pt-4 pb-4'>
                        <div class='flex ml-3 items-center  '>
                            <Icon
                                w={6}
                                h={6}
                                color='blue.500'
                                as={IoChatboxEllipsesSharp}
                            />
                            <Text class='ml-5 text-lg uppercase text-gray-500 font-semibold'>
                                my stuff
                            </Text>
                        </div>
                        <List ml={10}>
                            <UnorderedList
                                fontWeight='semibold'
                                fontSize='sm'
                                listStyleType='none'>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    My Coupons
                                </ListItem>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    My Reviews & Ratings
                                </ListItem>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    All Notification
                                </ListItem>
                                <ListItem
                                    pt={2}
                                    color='gray.700'
                                    pb={2}
                                    _hover={{ color: 'blue' }}>
                                    My Whishlist
                                </ListItem>
                            </UnorderedList>
                        </List>
                    </div>
                    {/* logout */}
                    <div class='flex pl-3 pt-4 pb-4 border items-center'>
                        <Icon
                            w={6}
                            h={6}
                            color='blue.500'
                            as={BiLogOutCircle}
                        />
                        <Link
                            _hover='none'
                            _focus='none'
                            as={RouterLink}
                            onClick={logoutHandler}>
                            <Text class='ml-5 text-lg uppercase text-gray-500 font-semibold'>
                                Logout
                            </Text>
                        </Link>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default UserSider
