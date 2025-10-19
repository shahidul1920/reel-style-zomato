import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/user/register' element={<h1>hello register</h1>} />
            <Route path='/user/login' element={<h1>hello login</h1>} />
            <Route path='/food-partner/register' element={<h1 className='text-5xl'>food-partner register</h1>} />
            <Route path='/food-partner/login' element={<h1>food-partner login</h1>} />
        </Routes>
    </Router>
  )
}
