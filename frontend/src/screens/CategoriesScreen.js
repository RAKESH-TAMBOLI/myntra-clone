import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../components/Filter'
import Product from '../components/Product'
import { categoriesListProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const CategoriesScreen = ({ match }) => {
    const dispatch = useDispatch()
    const categoriesList = useSelector(state => state.categoriesList)
    const { loading, error, categoriesProducts } = categoriesList
    useEffect(() => {
        dispatch(categoriesListProducts(match.params.categories))
    }, [dispatch, Filter, match.params.categories])

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
                        {categoriesProducts.map(product => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
export default CategoriesScreen
