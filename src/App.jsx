import { useState } from 'react'
import { Button } from './shared/components/button/Button'
import { Input } from './shared/components/input/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-3xl font-bold underline'>Test text</div>
      <Button variant='default'>Test button</Button>
    </>
  )
}

export default App
