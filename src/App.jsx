import { useState } from 'react'
import { Button } from './shared/components/button/Button'
import { Input } from './shared/components/input/Input'
import { BASE } from './shared/lib/routesResolver'
import { createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import ProductListContainer from './components/productList/ProductListContainer'
import ProductContainer from './components/product/ProductContainer'
import { routes } from './Routes'

const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}