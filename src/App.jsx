import { useState } from 'react'
import './App.module.css'
import Header from './layout/Header/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  

  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
      
   
  )
}

export default App
