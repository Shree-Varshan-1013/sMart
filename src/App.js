import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './theme';
import SidebarWithHeader from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Settings from './Components/Settings/Settings';
import WishList from './Components/WishList/WishList';
import SignInForm from './Components/Sign-in/Sign-in';
import ProductCard from './Components/ProductCard/ProductCard';


function App() {
  // fetch products from localhost:8000/products
  return (
    <ChakraProvider theme={Theme}>
      <SidebarWithHeader />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<ProductCard />}></Route>
          <Route path='/wishlist' element={<WishList />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/login' element={<SignInForm />}></Route>
        </Routes>
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
