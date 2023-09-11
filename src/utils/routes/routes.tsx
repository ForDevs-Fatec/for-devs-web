import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Login} from '../../pages/auth/login'
import {Register} from '../../pages/auth/register'

export function MainRoutes() {
    return(
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}