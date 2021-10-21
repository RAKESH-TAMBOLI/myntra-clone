import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../components/Filter'
import Product from '../components/Product'
import { brandListProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const BrandScreenProductScreen = ({ match }) => {
    const dispatch = useDispatch()
    const brandList = useSelector(state => state.brandList)
    const { loading, error, brandProducts } = brandList
    useEffect(() => {
        dispatch(brandListProducts(match.params.brand))
    }, [dispatch, Filter])

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message type='error'>{error}</Message>
            ) : (
                <div class='flex flex-row'>
                    <div class='xs:hidden lg:block '>
                        <Filter />
                    </div>
                    <div class='grid xs:grid-cols-2 md:grid-cols-4 xs:gap-5 lg:gap-y-5 lg:gap-x-20 xs:ml-0 lg:ml-10'>
                        {brandProducts.map(product => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
export default BrandScreenProductScreen

// console.log(match.params.brand)
// console.log(match.params.gender)
// console.log(match.params.categories)
// console.log(match.params)

// const brandProduct = products.filter(b => b.brand === match.params.brand)
// console.log(brandProduct)

// const categoriesProduct = products.filter(
//     c => c.categories === match.params.categories
// )
// console.log(categoriesProduct)
