import React from 'react'
import ReactDOM from 'react-dom/client'
// style
import './assets/style/index.css'
// router
import { BrowserRouter, Routes, Route } from "react-router-dom"
// components
import Home from './components/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)