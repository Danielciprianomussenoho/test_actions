import { increment, decrement } from "./redux/counterSlices"
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col gap-2 items-center justify-center h-screen'>
      <h1 className='text-2xl font-semibold mb-4 bg-gray-400 p-2 rounded-2xl text-white'>Counters: {count}</h1>
      <div className=" flex gap-2 justify-center items-center">
        <button className="bg-green-600 p-2 rounded-2xl text-white" onClick={()=>dispatch(increment())}>increment</button>
        <button className="bg-red-600 p-2 rounded-2xl text-white" onClick={()=>dispatch(decrement())}>dencrement</button>
      </div>
    </div>
  )
}

export default App