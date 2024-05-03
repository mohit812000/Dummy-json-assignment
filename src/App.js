
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Appbar from './components/Appbar';
import { Container } from 'react-bootstrap';
import Product from './components/Product';
import Categories from './components/Categories';
import Category from './components/Category';
import AddToCart from './components/AddToCart';

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar/>
        <Routes>
        <Route path='/' element={<Home/>} />


        </Routes>
        <Container>
        <Routes>
          <Route path='/categories' element={<Categories/>} />
          <Route path='/category/:categoryname' element={<Category/>} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:productid' element={<Product/>} />
          <Route path='/addtocart' element={<AddToCart/>}/>
          
        </Routes>

        </Container>
        
      </Router>
      
    </div>
  );
}

export default App;
