import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

import { ShoppingCartContentProvider } from './store/shopping-cart-content.jsx';

function App() {
  
  return (
    <ShoppingCartContentProvider>
      <Header/>
      <Shop >
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </ShoppingCartContentProvider>
  );
}

export default App;
