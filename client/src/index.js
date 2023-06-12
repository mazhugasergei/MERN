import React from 'react'
import ReactDOM from 'react-dom/client'
// style
import './assets/style/index.css'
// router
import { BrowserRouter, Routes, Route } from "react-router-dom"
// components
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/Creaet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/notes/:id" element={<Details />} />
        <Route path="/notes/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)