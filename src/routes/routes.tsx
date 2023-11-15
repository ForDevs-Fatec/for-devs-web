import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Login,
  Dashboard,
  SearchPage,
  UsersPage,
  MetricsPage,
  ReliabilityPage,
} from "../pages";

export function MainRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path="/reliability" element={<ReliabilityPage />} />
      </Routes>
    </BrowserRouter>
  );
}
