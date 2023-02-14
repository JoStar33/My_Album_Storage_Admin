<<<<<<< HEAD
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import LoginPage from './pages/LoginPage';
function App() {

  return (
    <div className="App">
      <LoginPage></LoginPage>
=======
import React from 'react';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<MainPage/>}></Route>
        <Route path="login" element={<LoginPage/>} />
      </Routes>
>>>>>>> 426a458ac2f27dd8a4354d21f01ba4a6a50946b7
    </div>
  )
}

export default App
