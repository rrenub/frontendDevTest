import React from 'react'
import { Outlet } from 'react-router'
import { CartProvider, useCart } from '../context/CartContext'
import { ShoppingCart } from 'lucide-react'
import Header from './Header'

export default function MainLayout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col border border-gray-300">
        <Header/>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </CartProvider>
  )
}
