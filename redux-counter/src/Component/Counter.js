import Buttons from "./Buttons";
import Count from "./Count";


export default function Counter({ id, increment, decrement, count }) {

    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <Count count={count} />
            <div class="flex space-x-3">
                <Buttons handlar={() => increment(id)}>INCREMENT</Buttons>
                <Buttons handlar={() => decrement(id)}>DECREMENT</Buttons>

            </div>
        </div>
    )
}
