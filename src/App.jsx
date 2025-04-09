import { createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router'
import { routes } from './Routes'

const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}