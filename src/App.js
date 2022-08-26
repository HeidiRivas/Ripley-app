import Login from './Pages/Login/Login.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Pages/Products/Products.js';
import NewProduct from './Pages/NewProduct/NewProduct.js';
import React from 'react';
import { BulkPoducts } from 'Pages/BulkProduct/bulkProduct.js';
import { TablePage } from 'Pages/ProductTable/pageTable.js';
import 'rsuite/dist/rsuite.min.css';
import {ContextProvider} from './Componentes/Context/Context.js'



function App() {
  return (
    <ContextProvider>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login />}></Route>
  <Route path='/Products' element={<Products />}></Route>
  <Route path='/newproduct' element={<NewProduct />}></Route>  
  <Route path='/bulkProducts' element={<BulkPoducts/>}></Route>  
  <Route path='/pageTable' element={<TablePage/>}></Route>
  
</Routes>
</BrowserRouter>
</ContextProvider>
  );
}

export default App



