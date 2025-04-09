import { fetchWithCache } from '/src/shared/lib/cacheUtils'
import ProductList from './ProductList'
import { Input } from '/src/shared/components/input/Input'
import React, { useEffect, useState } from 'react'

export default function ProductListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchWithCache("https://itx-frontend-test.onrender.com/api/product") 
      .then((products) => {
        setProducts(products)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase()
    return (
      product.model.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term)
    )
  })

  return (
    <>
      <div className="flex justify-end items-center mb-6">
        <div className="w-64">
          <Input 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search product"/>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          { loading ? 
            <p>cargando</p> :
            <ProductList products={filteredProducts}/>
          }
      </div>
    </>
  )
}
