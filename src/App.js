
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Items from './Pages/Home/Items/Items';
import KidsCollections from './Pages/Home/KidsCollections/KidsCollections';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/kidsCollection' element={<KidsCollections></KidsCollections>}></Route>
        <Route path='/item/:itemId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
