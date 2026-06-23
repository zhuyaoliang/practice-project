import { useSelector } from 'react-redux'
import type { RootState } from '../store'

function About() {
  const count = useSelector((state: RootState) => state.counter.count)

  return (
    <section id="center">
      <h1>关于</h1>
      <p>这是 React Router 示例页面，全局 Redux 状态在路由间共享。</p>
      <p>当前计数：{count}</p>
    </section>
  )
}

export default About
