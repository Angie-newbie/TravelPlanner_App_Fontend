import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Login from './pages/Login.jsx';
import Expense from './pages/ExpensePage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redirect root to login Page */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* Layout wrapper */}
        <Route element={<App />}>
          {/* This is the expense route, as it will negivate from tripsPage, and only display ONE Trip's expenses */}
          <Route path="/trips/:tripId" element={<Expense />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
