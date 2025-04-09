import ProductContainer from "./components/product/ProductContainer"
import ProductListContainer from "./components/productList/ProductListContainer"
import MainLayout from "./layout/MainLayout"
import { fetchWithCache } from "./shared/lib/cacheUtils"

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    handle: { breadcrumb: () => 'Productos' }, 
    children: [
      {
        index: true,
        element: <ProductListContainer />,
      },
      {
        path: 'product/:id',
        element: <ProductContainer />,
        loader: async ({ params }) => {
          const product = await fetchWithCache(`https://itx-frontend-test.onrender.com/api/product/${params.id}`)
          return product
        },
        handle: {
          breadcrumb: ({ data }) => data?.model || 'Detalles del producto'
        }
      }
    ]
  }
]

