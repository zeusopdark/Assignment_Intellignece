import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './component/Home'
import RecipeDetailsPage from './component/RecipeDetailsPage'
import Navbar from './component/Navbar'
import Error from './component/Error'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="/not-found" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App