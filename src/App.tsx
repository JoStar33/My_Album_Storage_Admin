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
    </div>
  )
}

export default App
