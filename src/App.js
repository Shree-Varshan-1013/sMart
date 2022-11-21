import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './theme';
import SidebarWithHeader from './Components/Navbar/Navbar';
// import productCard from './Components/ProductCard/ProductCard';


function App() {
  // fetch products from localhost:8000/products
  return (
    <ChakraProvider theme={Theme}>
      <SidebarWithHeader />
      {/* <div className="products">
        {
          products.map((product) => (
            <productCard props={product} />
          ))
        }
      </div> */}
    </ChakraProvider>
  );
}

export default App;
