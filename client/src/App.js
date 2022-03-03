
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignUp from './component/User/SignUp';
import LoginPage from './component/User/LoginPage';
import Profile from './component/User/Profile';
 import Header from './component/Header/Header';
import Home from './component/Home/Home';
import ListProduct from './component/Product/ListProduct';
import InfoProduct from './component/Product/InfoProduct';
import AdminListProduct from './component/Admin/AdminListProduct';
import EditProduct from './component/Admin/EditProduct';

function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/signup" element={<SignUp/>} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/profil" element={<Profile/>} />
         <Route path="/product" element={<ListProduct/>}/>
         <Route path="/info/:id" element={<InfoProduct/>}/>
         <Route path="/admin" element={<AdminListProduct/>}/>
         <Route path="/edit/:id" element={<EditProduct/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
