import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorListProducts } from '../actions/productActions'
import Filter from '../components/Filter'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ColorProductScreen = ({ match }) => {
    // console.log(match.params.color)
    const dispatch = useDispatch()
    const colorList = useSelector(state => state.colorList)
    const { loading, error, colorProducts } = colorList
    useEffect(() => {
        dispatch(colorListProducts(match.params.color))
    }, [dispatch, Filter, match.params.color])

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message type='error'>{error}</Message>
            ) : (
                <div class='flex flex-row'>
                    <div class='xs:hidden lg:block sm:block md:block'>
                        <Filter />
                    </div>
                    <div class='grid xs:grid-cols-2 md:grid-cols-4 xs:gap-5 lg:gap-y-5 lg:gap-x-20 xs:ml-0 lg:ml-10'>
                        {colorProducts.map(product => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
export default ColorProductScreen
