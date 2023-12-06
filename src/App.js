import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Website/Home';
import Login from './Pages/Website/Auth/Login';
import Register from './Pages/Website/Auth/Register';
import Users from './Pages/Dashboard/Users';
import Dashboard from './Pages/Dashboard/Dashboard';
import Welcome from './Pages/Website/Page1/Welcome';
import RequireAuth from './Pages/Website/Auth/RequireAuth';
import Trying from './Pages/Website/Page1/Trying';
import MultiLine from './Pages/Website/Page1/MultiLineChart'
import GoogleCallBack from './Pages/Website/Auth/GoogleCallBack';
import User from './Pages/Dashboard/User';
import AddUser from './Pages/Dashboard/AddUser';
import Writer from './Pages/Dashboard/Writer';
import _404 from './Pages/Website/Auth/404'
import RequireBack from './Pages/Website/Auth/RequireBack';
import Categories from './Pages/Dashboard/Categories';
import AddCategory from './Pages/Dashboard/AddCategory';
import Category from './Pages/Dashboard/Category';
import Products from './Pages/Dashboard/Products';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {

// auth/google/callback
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route element={<RequireBack/>}> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Route>
      <Route path='/auth/google/callback' element={<GoogleCallBack/>}/>
      <Route path='/*' element={<_404/>}/>
      <Route element={<RequireAuth typeOfRule={['1995' , '1996', '1999']}/>}>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route element={<RequireAuth typeOfRule={['1995']}/>}>
            <Route path='users' element={<Users/>}/>
            <Route path='users/:id' element={<User/>}/>
            <Route path='user/add' element={<AddUser/>}/>
          </Route>
          <Route element={<RequireAuth typeOfRule={['1995','1999']}/>}>
            {/* Categories: */}
            <Route path='categories' element={<Categories/>}/>
            <Route path='categories/:id' element={<Category/>}/>
            <Route path='category/add' element={<AddCategory/>}/>
            {/* Products: */}
            <Route path='products' element={<Products/>}/>
            {/* {/* <Route path='products/:id' element={<Product/>}/> */}
            <Route path='product/add' element={<AddProduct/>}/>
          </Route>
          <Route element={<RequireAuth typeOfRule={['1995','1996']}/>}>
            <Route path='writer' element={<Writer/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
