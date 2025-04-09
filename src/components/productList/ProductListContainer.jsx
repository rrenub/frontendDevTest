import ProductList from './ProductList'
import { Input } from '/src/shared/components/input/Input'
import React, { useEffect, useState } from 'react'

export default function ProductListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch("https://itx-frontend-test.onrender.com/api/product") 
      .then((response) => response.json()) 
      .then((products) => {
        console.log(products)
        setProducts(products)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Product list</h2>
          <div className="w-64">
            <Input placeholder="Search product"/>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            { loading ? 
              <p>cargando</p> :
              <ProductList products={products}/>
            }
        </div>
    </>
  )
}
