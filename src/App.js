import Login from './Componentes/Login/Login.js'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Componentes/Products/Products.js';
import NewProduct from './Componentes/NewProduct/NewProduct.js';



function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login />}></Route>
  <Route path='/Products' element={<Products />}></Route>
  <Route path='/newproduct' element={<NewProduct />}></Route>
</Routes>

</BrowserRouter>
  );
}

export default App;



