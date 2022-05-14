
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import KidsCollections from './Pages/Home/KidsCollections/KidsCollections';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Inventories from './Pages/Home/Inventories/Inventories';
import AddItems from './Pages/AddItems/AddItems';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import Contact from './Pages/Contact/Contact';
import { ToastContainer } from 'react-bootstrap';
import CheckOut from './Pages/CheckOut/CheckOut';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/kidsCollection' element={<KidsCollections></KidsCollections>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/checkout/:inventoryId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={
        <RequireAuth>
          <Blog></Blog>
        </RequireAuth>
        }></Route>
        <Route path='/contact' element={
        <RequireAuth>
          <Contact></Contact>
        </RequireAuth>
        }></Route>
        <Route path='/addItems' element={
        <RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>
        }></Route>
        <Route path='/manageItems' element={
        <RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
        <RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
