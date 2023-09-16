import React, { useEffect, useState } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(1)
    useEffect(() => {
        let interval = setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return count
}

export default useCounter