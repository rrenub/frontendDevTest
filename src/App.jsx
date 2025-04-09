import { useState } from 'react'
import { Button } from './shared/components/button/Button'
import { Input } from './shared/components/input/Input'
import { BASE } from './shared/lib/routesResolver'
import { Navigate, Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import ProductListContainer from './components/productList/ProductListContainer'
import ProductContainer from './components/product/ProductContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to={"/products"} />}></Route>
        <Route path="/products" element={<ProductListContainer />}/>
        <Route path="/product/:id" element={<ProductContainer/>}/>
      </Route>
    </Routes>
  )
}

export default App
