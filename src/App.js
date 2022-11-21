import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './theme';
import SidebarWithHeader from './Components/Navbar/Navbar';
import productCard from './Components/ProductCard/ProductCard';


function App() {
  // fetch products from localhost:8000/products
  const products = fetch('http://localhost:8000/products')
    .then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    })
  return (
    <ChakraProvider theme={Theme}>
      <SidebarWithHeader />
      {/* <div className="products">
        {products.map((product) => (
          <productCard product={product} />
        ))}
      </div> */}
    </ChakraProvider>
  );
}

export default App;
