import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { genderListProduct } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Filter from '../components/Filter'
import Product from '../components/Product'
const GenderProductScreen = ({ match }) => {
    const dispatch = useDispatch()
    const genderList = useSelector(state => state.genderList)
    const { loading, error, genderProducts } = genderList
    useEffect(() => {
        dispatch(genderListProduct(match.params.gender))
    }, [dispatch, Filter, match.params.gender])
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
                        {genderProducts.map(product => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
export default GenderProductScreen
