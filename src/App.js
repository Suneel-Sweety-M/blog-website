import React from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './components/home/Home';
import Single from './components/single/Single';
import Write from './components/write/Write';
import Settings from './components/settings/settings';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Route, Routes } from 'react-router-dom';

function App() {

  const user = false;
  return (
    <>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={user ? <Home/> : <Login/>} />
        <Route path='/register' element={user ? <Home/> : <Register/>} />
        <Route path='/post/:id' element={<Single/>} />
        <Route path='/write' element={user ? <Write/> : <Register/>} />
        <Route path='/settings' element={user ? <Settings/> : <Register/>} />
      </Routes>
    </>
  );
};

export default App;
