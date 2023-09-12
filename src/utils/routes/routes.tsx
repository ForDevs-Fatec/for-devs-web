import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {
    Login,
    Register,
    Dashboard
} from '../../pages'

export function MainRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}