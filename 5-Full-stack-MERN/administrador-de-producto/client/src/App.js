import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductForm from './components/productForm';
import ProductOne from './components/productOne';

function App() {
  return (
    <div className='text-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductForm />} />
          <Route path='/oneproduct/:id' element={<ProductOne />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
