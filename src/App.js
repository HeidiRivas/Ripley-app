import Login from './Pages/Login/Login.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Pages/Products/Products.js';
import NewProduct from './Pages/NewProduct/NewProduct.js';
import React from 'react';
import { BulkPoducts } from 'Pages/BulkProduct/bulkProduct.js';
import 'rsuite/dist/rsuite.min.css';



function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login />}></Route>
  <Route path='/Products' element={<Products />}></Route>
  <Route path='/newproduct' element={<NewProduct />}></Route>  
  <Route path='/bulkProducts' element={<BulkPoducts/>}></Route>
</Routes>

</BrowserRouter>
  );
}

export default App



