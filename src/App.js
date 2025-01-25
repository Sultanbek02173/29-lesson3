import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart, CategoryPage, DetailPage, HomePage } from './pages';
import './app.css'
import { Header } from './widgets/header/Header';
import { Footer } from './widgets';

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
