import React from 'react'
import { useCart } from '../context/CartContext'
import { ShoppingCart } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../shared/components/breadcrumb/Breadcrumb'
import { useMatches } from 'react-router'

export default function Header() {
  const { cartCount } = useCart()

  const matches = useMatches()

  let fullPath = ''

  const breadcrumbs = matches
    .filter((match) => match.handle?.breadcrumb)
    .map((match, index, array) => {
      const isLast = index === array.length - 1
      const crumb = typeof match.handle.breadcrumb === 'function'
        ? match.handle.breadcrumb({ params: match.params, data: match.data })
        : match.handle.breadcrumb

      // Construir la ruta acumulada para que los enlaces funcionen bien
      fullPath += '/' + (match.pathnameBase ?? '')

      return (
        <BreadcrumbItem key={fullPath}>
          <BreadcrumbLink asChild>
            {isLast ? (
              <span className="text-muted-foreground">{crumb}</span>
            ) : (
              <Link to={fullPath}>{crumb}</Link>
            )}
          </BreadcrumbLink>
          {!isLast && <BreadcrumbSeparator />}
        </BreadcrumbItem>
      )
    })

  return (
    <header>
      <div className="w-full p-6 border-b border-gray-300 flex justify-between">
        <h1 className="text-xl font-semibold text-gray-800">
          <Link to={"/"}>Frontend Dev</Link>
        </h1>
        <div className="relative flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-3 bg-black text-white rounded-full text-xs px-2">
              {cartCount}
            </span>
          )}
        </div>
      </div>
      <div className='p-6 border-b border-gray-300'>
        <Breadcrumb>{breadcrumbs}</Breadcrumb>
      </div>
    </header>
  )
}
