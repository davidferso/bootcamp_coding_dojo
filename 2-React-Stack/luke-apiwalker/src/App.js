import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchInfo from './components/SearchInfo';
import SearchFor from './components/SearchFor';
import ErrorMessage from './components/ErrorMessage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchFor />
        <Routes>
          <Route path='/' element=''></Route>
          <Route path='/SearchInfo/:state/:id' element= {<SearchInfo/>}></Route>
          <Route path='/ErrorMessage' element = {<ErrorMessage/>}></Route>
          <Route path='/:id' element= {<SearchInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;