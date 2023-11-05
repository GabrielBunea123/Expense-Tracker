import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DrawerNav from './components/DrawerNav'
import Home from './pages/Home'
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DrawerNav />}>
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default App