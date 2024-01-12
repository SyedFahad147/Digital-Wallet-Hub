import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom';
import {ChakraProvider, theme} from '@chakra-ui/react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </BrowserRouter>  
);

export const server ='https://api.coingecko.com/api/v3';
