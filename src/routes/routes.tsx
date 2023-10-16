import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {
    Login,
    Register,
    Dashboard
} from '../pages'
import { SearchPage } from '../pages/search'
import { UsersPage } from '../pages/users'
import { MetricsPage } from '@/pages/metrics'

export function MainRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/metrics" element={<MetricsPage />} />
            </Routes>
        </BrowserRouter>
    )
}