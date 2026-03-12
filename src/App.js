import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
function App() {

  return (
    <BrowserRouter>
    
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Sokogarden</h1>
      </header>

      <nav>
        <Link to="/signup">Signup</Link>
      </nav>

    <Routes>
      <Route path ='/signup' element= {<Signup />} />
    </Routes>



    </div>
    </BrowserRouter>
  );
}

export default App;
