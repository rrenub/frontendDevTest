import React from 'react'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col border border-gray-300">
      <header className="w-full p-6 border-b border-gray-300">
        <h1 className="text-xl font-semibold text-gray-800">Frontend Dev</h1>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
