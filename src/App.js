import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';

function App() {

  return (
    <BrowserRouter>
    
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Sokogarden</h1>
      </header>

      <nav>
        <Link to="/signup" className='btn btn-secondary m-3'>Signup</Link> 
        <Link to="/signin" className='btn btn-secondary m-3'>Signin </Link>
        <Link to="/addproduct"  className='btn btn-secondary m-3'>Add product </Link>
        <Link to="/" className='btn btn-secondary m-3'>Get products </Link>


      </nav>

    <Routes>
      <Route path ='/' element= {<Getproducts/>}  />
      <Route path ='/signup' element= {<Signup />} />
      <Route path ='/signin' element= {<Signin/>}  />
      <Route path ='/addproduct' element= {<Addproduct/>}  />
      

    </Routes>

      

    </div>
    </BrowserRouter>
  );
}

export default App;
