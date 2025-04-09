import { Input } from '/src/shared/components/input/Input'
import React from 'react'

export default function ProductListContainer() {

  return (
    <>
      <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Product list</h2>
          <div className="w-64">
            <Input placeholder="Search product"/>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-square bg-white border border-gray-300 flex items-start p-4">
              <span className="text-gray-800 font-medium">Item 1</span>
            </div>
        </div>
    </>
  )
}
