import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/counter/actions'
import type { RootState } from '../store'

function Home() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <section id="center">
      <h1>Redux 计数器</h1>
      <p>当前计数：{count}</p>
      <div className="counter-actions">
        <button type="button" onClick={() => dispatch(increment())}>
          +1
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          -1
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          重置
        </button>
      </div>
    </section>
  )
}

export default Home
