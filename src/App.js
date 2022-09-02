import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ExpertDetail from './pages/Home/ExpertDetail/ExpertDetail';
import ServiceDetail from './pages/Home/ServiceDetail/ServiceDetail';
import Services from './pages/Home/Services/Services';
import Experts from './pages/Home/Experts/Experts';
import RequireAuth from './RequireAuth/RequireAuth';
import VerifyEmail from './VerifyEmail/VerifyEmail';
import AddExpert from './pages/AddExpert/AddExpert';
import AddService from './pages/AddService/AddService';


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="home/services" element={<Services/>}></Route>
        <Route path="home/experts" element={<Experts/>}></Route>
        <Route path="/service/:id" element={<RequireAuth><ServiceDetail/></RequireAuth>}></Route>
        <Route path="/expert/:id" element={<RequireAuth><ExpertDetail/></RequireAuth>}></Route>
        <Route path="/add-service" element={<AddService/>}></Route>
        <Route path="/add-expert" element={<AddExpert/>}></Route>
        <Route path="/verifyemail" element={<VerifyEmail/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path= "*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
