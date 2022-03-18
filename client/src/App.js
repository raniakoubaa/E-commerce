
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
import AddProduct from './component/Admin/AddProduct';
import ProductsCustomer from './component/customer/ProductsCustomer';
import Iphone from './component/Product/Iphone';
import Ipad from './component/Product/Ipad';
import Cart from './component/customer/Cart';
import ListUsers from './component/Admin/ListUsers';
import Mac from './component/Product/Mac';
import DetailUser from './component/User/DetailUser';
import Paypal from './component/customer/Paypal';


function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/signup" element={<SignUp/>} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/profil" element={<Profile/>} />
         <Route path="/product" element={<ListProduct/>}/>
         <Route path="/Iphone" element={<Iphone/>}/>
         <Route path="/ipad" element={<Ipad/>}/>
         <Route path="/mac" element={<Mac/>}/>
         <Route path="/info/:id" element={<InfoProduct/>}/>
         <Route path="/admin" element={<AdminListProduct/>}/>
         <Route path="/users" element={<ListUsers/>}/>
         <Route path="/edit/:id" element={<EditProduct/>}/>
         <Route path="/addProduct" element={<AddProduct/>}/>
         <Route path="/custumer" element={<ProductsCustomer/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/oneuser/:id" element={<DetailUser/>}/>
         <Route path="/paypal" element={< Paypal/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
