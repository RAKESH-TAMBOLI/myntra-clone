import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </Provider>,
    document.getElementById('root')
)
