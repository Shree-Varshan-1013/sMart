import React from 'react';
import {
  ChakraProvider,
  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  // theme,
} from '@chakra-ui/react';
import Theme from './theme';
import SidebarWithHeader from './Components/Navbar/Navbar.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInForm from './Components/Sign-in/Sign-in';



function App() {
  return (
    <ChakraProvider theme={Theme}>
      {/* <SidebarWithHeader /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SidebarWithHeader />} />
          <React path="auth/login" element={<SignInForm />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
