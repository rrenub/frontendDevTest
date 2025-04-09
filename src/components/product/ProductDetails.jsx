import { Card } from '/src/shared/components/card/Card'
import React from 'react'
import { useNavigate } from 'react-router'
import ProductDetailsInfo from './ProductDetailsInfo'
import ProductActions from './ProductActions'

export default function ProductDetails({ product }) {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/")
  }

  return (
    <div className="min-h-screen flex flex-col gap-6">
      <header className="flex items-center">
        <h1 className="text-xl font-semibold">{product.model}</h1>
      </header>

      <Card className="flex-1 p-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-lg p-4 flex items-center justify-center">
            <img src={product.imgUrl} alt="Smartphone" className="object-contain w-1/2" />
          </div>

          <div className="flex flex-col gap-2">
            <ProductDetailsInfo product={product}/>
            <ProductActions product={product}/>
          </div>
        </div>
      </Card>
    </div>
  )
}
