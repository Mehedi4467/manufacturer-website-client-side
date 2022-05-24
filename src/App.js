import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Registration from "./Pages/Registration/Registration";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Dashboard/Profile";
import Review from "./Pages/Dashboard/Review";
import CustomerOrder from "./Pages/Dashboard/CustomerOrder";
import Blogs from "./Pages/Blogs/Blogs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
import AddProduct from './Pages/Admin/AddProduct';
import MakeAdmin from "./Pages/Admin/MakeAdmin";
import ManageOrder from './Pages/Admin/ManageOrder';
import ManagePrduct from './Pages/Admin/ManageProduct';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Profile></Profile>} />
          <Route path="review" element={<RequireAuth><Review></Review></RequireAuth>} />
          <Route path="orders" element={<RequireAuth><CustomerOrder></CustomerOrder></RequireAuth>} />
          <Route path="update" element={<RequireAuth><UpdateProfile></UpdateProfile></RequireAuth>} />


          <Route path="addproduct" element={<RequireAuth><AddProduct></AddProduct> </RequireAuth>} />
          <Route path="makeAdmin" element={<RequireAuth><MakeAdmin></MakeAdmin></RequireAuth>} />
          <Route path="manageOrder" element={<RequireAuth><ManageOrder></ManageOrder></RequireAuth>} />
          <Route path="manageProduct" element={<RequireAuth><ManagePrduct></ManagePrduct></RequireAuth>} />
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
