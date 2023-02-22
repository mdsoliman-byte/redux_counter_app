import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((previousCount) => previousCount + 1)
    }
    const decrement = () => {

        setCount((previousCount) => previousCount - 1)


    }
    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div class="text-2xl font-semibold" id="display" >{count}</div>
            <div class="flex space-x-3">
                <button id="increment" onClick={increment}
                    class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                >
                    Increment
                </button>
                <button id="deincrement" onClick={decrement}
                    class="bg-red-400 text-white px-3 py-2 rounded shadow"
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
