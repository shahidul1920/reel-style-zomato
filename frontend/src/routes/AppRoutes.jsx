import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/user/res' element={<h1>hello reg</h1>} />
        </Routes>
    </Router>
  )
}
