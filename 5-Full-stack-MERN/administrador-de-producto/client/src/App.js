import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductEdit from './components/productEdit';
import ProductForm from './components/productForm';
import ProductOne from './components/productOne';
import ProductDelete from './components/productDelete';

function App() {
  return (
    <div className='text-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductForm />} />
          <Route path='/oneproduct/:id' element={<ProductOne />} />
          <Route path='/:id/edit/' element={<ProductEdit />} />
          <Route path='/:id/delete/' element={<ProductDelete />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
