
import { useEffect, useState } from "react";
const Counter = ()=>{
    const [count, setCount] = useState<number>(0)
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    useEffect(() => {
        console.log("useeffect counter ",count);
    }, [count]);
    return (
        <>
            <p className=" rounded-full w-20 align-middle h-20 bg-red-500 text-white text-center flex justify-center items-center">
                <span>{count}</span></p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} className="ml-5">Decrement</button>
        </>
    )
}
export default Counter;