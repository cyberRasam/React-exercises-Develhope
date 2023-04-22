import { useCallback, useState } from "react";

export function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(function increment(){
        setCount(c => c+1)
    }, [])

    const decrement = useCallback(function decrement(){
        setCount(c => c-1)
    }, [])

    const reset = useCallback(function reset(){
        setCount(initialValue)
    }, [initialValue])

    return [count, increment, decrement, reset]
}
