import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../features/counter/counterSlice"


export default function CounterRedux() { 
    
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (<div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())}> Decrement </button>
        <button onClick={() => dispatch(increment())}> Increment </button>
    </div>)
}