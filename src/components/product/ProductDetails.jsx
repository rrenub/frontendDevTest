import { Card } from '/src/shared/components/card/Card'
import { Button } from '/src/shared/components/button/Button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router';

export default function ProductDetails({product}) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/")
  }

  return (
    <div className="min-h-screen flex flex-col gap-6">
      {/* Header */}
      <header className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-2" onClick={handleBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">{product.model}</h1>
      </header>

      {/* Details View */}
      <Card className="flex-1 p-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="rounded-lg p-4 flex items-center justify-center">
              <img src={product.imgUrl} alt="Smartphone" className="object-contain w-1/2" />
          </div>

          {/* Description and Actions */}
          <div className="flex flex-col gap-6">
            {/* Description */}
            <div className="rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Especificaciones</h2>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium w-40">Marca</span>
                  <span>{product.brand}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">Modelo</span>
                  <span>{product.model}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">Precio</span>
                  <span className="font-bold text-emerald-600">{product.price}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">CPU</span>
                  <span>{product.cpu}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">RAM</span>
                  <span>{product.ram}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">Sistema Operativo</span>
                  <span>{product.os}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">Resolución de pantalla</span>
                  <span>{product.displayResolution}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">Batería</span>
                  <span>{product.battery}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">Cámaras</span>
                  <span>TODO</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">Dimensiones</span>
                  <span>1{product.dimentions}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-40">Peso</span>
                  <span>{product.weight}</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg p-6">
              <Button className="w-full h-14">Añadir al Carrito</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
