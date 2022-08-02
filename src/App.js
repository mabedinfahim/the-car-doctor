import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';



function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
