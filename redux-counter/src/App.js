
import { useState } from 'react';
import './App.css';
import Counter from './Component/Counter';
import Static from './Component/Static';
const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  },
]
function App() {
  const [state, setState] = useState(initialState)
  const increment = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1
        }
      }
      return { ...c }
    })
    setState(updateCounter)
  }
  const decrement = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1
        }
      }
      return { ...c }
    })
    setState(updateCounter)
  }
  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0)
  }
  return (
    <>
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* <!-- header --> */}
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        {/* <!-- counters --> */}
        <div class="max-w-md mx-auto mt-10 space-y-5">
          {
            state.map((count) => <Counter key={count.id} count={count.count} id={count.id} increment={increment} decrement={decrement} />)
          }

          <Static count={totalCount()} />
        </div>
      </div>
    </>
  );
}

export default App;
