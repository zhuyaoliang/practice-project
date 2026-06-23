import { useState } from 'react'
import Comp1 from "../../src/components/Comp1"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='APP'>
      组件
      <Comp1></Comp1>
    </div>
  )
}

export default App
