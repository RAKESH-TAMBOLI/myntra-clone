import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import {
    Image,
    Heading,
    Divider,
    Button,
    Text,
    RadioGroup,
    Radio,
    Stack,
    Link,
    Select,
    Box,
    Flex,
    FormControl,
    FormLabel,
    Textarea,
} from '@chakra-ui/react'
import Rating from '../components/Rating'
import { FaShoppingCart } from 'react-icons/fa'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
    singelProductDetails,
    createProductReview,
} from '../actions/productActions'

const RadioButtonValue = createContext()
const ProductDetailsScreen = ({ match, history }) => {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const { success: successProductReview, error: errorProductReview } =
        productReviewCreate

    const [radioValue, setRadioValue] = useState('')
    const [qty, setQty] = useState(1)

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    useEffect(() => {
        dispatch(singelProductDetails(match.params.id))
    }, [dispatch, match])
    const addCartHandler = () => {
        // history.push is used for redirecting
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    // Submit comment
    const submitHandler = e => {
        e.preventDefault()
        dispatch(
            createProductReview(match.params.id, {
                rating,
                comment,
            })
        )
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <div class='grid xs:grid-cols-1 lg:grid-cols-2 mt-10 '>
                    <Image
                        src={product.img}
                        alt={product.name}
                        borderRadius='md'
                        h='full'
                        ml='40'
                        objectFit='cover'
                        boxShadow='lg'
                    />
                    <div class=' xs:ml-24 lg:-ml-24 w-96 flex flex-col'>
                        <Heading as='h6' class='text-xl font-semibold'>
                            {product.brand}
                        </Heading>
                        <Heading
                            as='h6'
                            class='text-md font-semibold mt-3 text-gray-400'>
                            {product.categories}
                        </Heading>
                        <Rating
                            value={product.rating || 0}
                            text={`${product.numReviews} reviews`}
                        />
                        <div>
                            <Text class='text-gray-500 mt-3 mb-1'>
                                {product.name}
                            </Text>
                        </div>
                        <Divider />
                        <div class='flex justify-between mt-2 mb-1 font-semibold w-60'>
                            <Text>Price</Text>
                            <Text>₹ {product.price}</Text>
                        </div>
                        <Divider />
                        <div class='flex justify-between mt-2 mb-1 font-semibold w-60'>
                            <Text>Color</Text>
                            <Text>{product.color}</Text>
                        </div>
                        <Divider />
                        <div class='flex justify-between mt-2 font-semibold w-60'>
                            <Text>Status</Text>
                            <Text>
                                {product.countInStock > 0
                                    ? 'In Stock'
                                    : 'Out Of Stock'}
                            </Text>
                        </div>
                        <Divider />
                        <div>
                            <div class='flex items-center justify-between'>
                                {product.countInStock > 0 && (
                                    <div class='flex flex-col'>
                                        <Text class='text-sm text-gray-600'>
                                            Quantity
                                        </Text>
                                        <Select
                                            value={qty}
                                            onChange={e =>
                                                setQty(e.target.value)
                                            }
                                            width='100%'>
                                            {[
                                                ...Array(
                                                    product.countInStock
                                                ).keys(),
                                            ].map(x => (
                                                <option
                                                    key={x + 1}
                                                    value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>
                                )}
                                <div class='ml-5'>
                                    {/* size  */}
                                    <Text class='text-sm mb-4 text-gray-600'>
                                        Select Size
                                    </Text>
                                    <RadioGroup
                                        onChange={setRadioValue}
                                        value={radioValue}>
                                        <Stack direction='row'>
                                            <RadioButtonValue.Provider
                                                value={[radioValue]}>
                                                <Radio value='small'>
                                                    SMALL
                                                </Radio>
                                            </RadioButtonValue.Provider>
                                            <Radio value='medium'>MEDIUM</Radio>
                                            <Radio value='large'>LARGE</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </div>
                            </div>
                            <div class='mt-10'>
                                <Stack class='flex'>
                                    <Button
                                        onClick={addCartHandler}
                                        w='40'
                                        fontSize='sm'
                                        letterSpacing='wider'
                                        colorScheme='blue'>
                                        BUY NOW
                                    </Button>
                                    <Link as={RouterLink} to='/' _hover='none'>
                                        <Button
                                            ml='5'
                                            w='40'
                                            alignItems='center'
                                            leftIcon={<FaShoppingCart />}
                                            variant='unstyled'
                                            boxShadow='md'>
                                            add to cart
                                        </Button>
                                    </Link>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Review form */}
            <Box mt='10'>
                <Box>
                    <Heading as='h2' class='text-3xl font-semibold'>
                        Reviews
                    </Heading>
                    {product.reviews.length === 0 && (
                        <Message>No Reviews</Message>
                    )}
                    <Box p='4' bgColor='white' rounded='md' mb='1'>
                        {product.reviews.map(review => (
                            <Flex direction='column' key={review._id} mb='5'>
                                <Flex justifyContent='space-between'>
                                    <Text fontSize='lg'>
                                        <strong>{review.name}</strong> on{' '}
                                        {review.createdAt.substring(0, 10)}
                                    </Text>
                                    <Rating value={review.rating} />
                                </Flex>
                                <Text mt='2'>{review.comment}</Text>
                            </Flex>
                        ))}
                    </Box>
                    <Box
                        p='10'
                        bgColor='white'
                        rounded='md'
                        mt='10'
                        border='2px'
                        borderColor='gray.300'>
                        <Heading as='h3' size='lg' mb='6'>
                            Write a review
                        </Heading>
                        {errorProductReview && (
                            <Message type='error'>{errorProductReview}</Message>
                        )}
                        {userInfo ? (
                            <form onSubmit={submitHandler}>
                                <FormControl id='rating' mb='3'>
                                    <FormLabel>Rating</FormLabel>
                                    <Select
                                        placeholder='Select option'
                                        value={rating}
                                        onChange={e =>
                                            setRating(e.target.value)
                                        }>
                                        <option>Select...</option>
                                        <option value='1'>1 - Poor</option>
                                        <option value='2'>2 - Okay</option>
                                        <option value='3'>3 - Good</option>
                                        <option value='4'>4 - Very Good</option>
                                        <option value='5'>5 - Excellent</option>
                                    </Select>
                                </FormControl>
                                <FormControl id='comment' mb='3'>
                                    <FormLabel>Comment</FormLabel>
                                    <Textarea
                                        value={comment}
                                        onChange={e =>
                                            setComment(e.target.value)
                                        }></Textarea>
                                </FormControl>
                                <Button colorScheme='teal' type='submit'>
                                    Post Review
                                </Button>
                            </form>
                        ) : (
                            <Message>
                                Please{' '}
                                <Link as={RouterLink} to='/login'>
                                    log in
                                </Link>{' '}
                                to write a review.
                            </Message>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default ProductDetailsScreen
export { RadioButtonValue }
