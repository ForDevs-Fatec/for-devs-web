import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {
    Login,
    Register,
    Dashboard
} from '../../pages'
import { SearchPage } from '../../pages/search'

export function MainRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    )
}