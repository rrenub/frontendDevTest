import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { fetchWithCache } from '/src/shared/lib/cacheUtils'
import ProductDetails from './ProductDetails';

export default function ProductContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetchWithCache(`https://itx-frontend-test.onrender.com/api/product/${id}`) 
      .then((product) => {
        setProduct(product)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
    }, [])

  return (
    <>
      {loading ? (
        <p>cargando</p>
      ) : product ? (
        <ProductDetails product={product} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </>
  )
}
