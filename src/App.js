import Testing from './components/testing';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import SingleProduct from './components/singleproduct';
import Footer from './components/footer';

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/:productId" element={<SingleProduct/>}></Route>
    </Routes>
  </BrowserRouter>
  </>

  );
}

export default App;

