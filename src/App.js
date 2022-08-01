import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';



function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
      </Routes>
    </>
  );
}

export default App;
