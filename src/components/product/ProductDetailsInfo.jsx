import React from 'react'

export default function ProductDetailsInfo({product}) {
  return (
    <div className="rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Especificaciones</h2>
      <ul className="space-y-2">
        <li className="flex"><span className="font-medium w-40">Marca</span><span>{product.brand}</span></li>
        <li className="flex"><span className="font-medium w-40">Modelo</span><span>{product.model}</span></li>
        <li className="flex"><span className="font-medium w-40">Precio</span><span className="font-bold text-emerald-600">{product.price} €</span></li>
        <li className="flex"><span className="font-medium w-40">CPU</span><span>{product.cpu}</span></li>
        <li className="flex"><span className="font-medium w-40">RAM</span><span>{product.ram}</span></li>
        <li className="flex"><span className="font-medium w-40">Sistema Operativo</span><span>{product.os}</span></li>
        <li className="flex"><span className="font-medium w-40">Resolución de pantalla</span><span>{product.displayResolution}</span></li>
        <li className="flex"><span className="font-medium w-40">Batería</span><span>{product.battery}</span></li>
        <li className="flex"><span className="font-medium w-40">Cámaras</span><span>TODO</span></li>
        <li className="flex"><span className="font-medium w-40">Dimensiones</span><span>{product.dimentions}</span></li>
        <li className="flex"><span className="font-medium w-40">Peso</span><span>{product.weight}</span></li>
      </ul>
    </div>
  )
}
