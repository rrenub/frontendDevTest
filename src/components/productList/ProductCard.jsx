import { useNavigate } from 'react-router';
import { Button } from '/src/shared/components/button/Button'
import { Card, CardFooter, CardHeader } from '/src/shared/components/card/Card'
import React from 'react'

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`, { state: { productName: product.name } })
  }

  return (
    <Card 
      onClick={handleProductClick}
      className="overflow-hidden transition-all hover:shadow-md cursor-pointer">
      <div className="aspect-square relative overflow-hidden flex items-center justify-center">
        <img
          src={product.imgUrl}
          alt={product.model}
          className="w-1/2 h-auto object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="text-sm text-muted-foreground font-medium">{product.brand}</p>
            <h3 className="font-semibold text-lg mt-1">{product.model}</h3>
          </div>
          <div className="text-lg font-bold">
            {product.price} €
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
