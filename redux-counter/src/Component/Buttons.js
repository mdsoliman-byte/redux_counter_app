

export default function Buttons({ children, handlar }) {
    return (
        <button id="increment" onClick={handlar}
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        >
            {children}
        </button>
    )
}
