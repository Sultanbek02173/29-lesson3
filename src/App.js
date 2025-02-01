import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart, CategoryPage, DetailPage, HomePage } from './pages';
import './app.css'
import { Header } from './widgets/header/Header';
import { Footer } from './widgets';
import { useEffect, useState } from 'react';

function App() {
  const [cartData, setCartData] = useState(localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []);

  const addProduct = (obj) => {
    const idx = cartData.findIndex((item) => {
      return item.id === obj.id
    })

    if(idx < 0){
      setCartData([{
        ...obj,
        count: 1
      }, ...cartData])
    }else{
      cartData[idx].count += 1;
      setCartData([...cartData])
    }
  }

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(cartData))
  }, [cartData]);

  return (
    <BrowserRouter>
      
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/detail/:id' element={<DetailPage addProduct={addProduct} />} />
        <Route path='/cart' element={<Cart cartData={cartData} />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
