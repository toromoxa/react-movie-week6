import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/:id' element={<MovieDetail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
