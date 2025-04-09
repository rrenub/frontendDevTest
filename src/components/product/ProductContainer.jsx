import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ProductDetails from './ProductDetails';

export default function ProductContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    fetch(`https://itx-frontend-test.onrender.com/api/product/${id}`) 
      .then((response) => response.json()) 
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
