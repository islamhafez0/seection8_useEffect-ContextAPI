import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'
import useCounter from '../hooks/useCounter'
const Count = () => {
    const { data } = useContext(CounterContext)
    const count = useCounter()
    return (
        // <div className="counter"> { count} </div>
        <div className="counter"> { data.count } </div>
    )
}

export default Count