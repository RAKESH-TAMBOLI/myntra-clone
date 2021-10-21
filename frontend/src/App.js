import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Flex, Container } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import BrandScreenProductScreen from './screens/BrandScreenProductScreen'
import CategoriesScreen from './screens/CategoriesScreen'
import ColorProductScreen from './screens/ColorProductScreens'
import GenderProductScreen from './screens/GenderProductScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ShoppingCartScreen from './screens/ShoppingCartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import PaymentScreen from './screens/PaymentScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
const App = () => {
    return (
        <Router>
            <Header />
            <Container maxW='8xl'>
                <Flex
                    as='main'
                    mt='72px'
                    as='main'
                    minH='xl'
                    py='5'
                    px='5'
                    direction='column'>
                    <Route
                        path='/admin/orderlist'
                        component={OrderListScreen}
                    />
                    <Route path='/order/:id' component={OrderScreen} />
                    <Route path='/placeOrder' component={PlaceOrderScreen} />
                    <Route path='/payment' component={PaymentScreen} />
                    <Route path='/Shipping' component={ShippingScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/profile' component={ProfileScreen} />
                    <Route path='/register' component={RegisterScreen} />
                    <Route
                        path='/product/:id'
                        component={ProductDetailsScreen}
                    />
                    <Route
                        path='/admin/product/:id/edit'
                        component={ProductEditScreen}
                    />
                    <Route path='/cart/:id?' component={ShoppingCartScreen} />
                    <Route
                        path='/gender/:gender'
                        component={GenderProductScreen}
                    />
                    <Route
                        path='/color/:color'
                        component={ColorProductScreen}
                    />
                    <Route
                        path='/categories/:categories'
                        component={CategoriesScreen}
                    />
                    <Route
                        path='/brand/:brand'
                        component={BrandScreenProductScreen}
                    />
                    <Route
                        path='/admin/user/:id/edit'
                        component={UserEditScreen}
                    />
                    <Route path='/admin/userlist' component={UserListScreen} />
                    <Route
                        path='/admin/productlist'
                        component={ProductListScreen}
                    />
                    <Route path='/' exact component={HomeScreen} />
                </Flex>
            </Container>
            <Footer />
        </Router>
    )
}

export default App
