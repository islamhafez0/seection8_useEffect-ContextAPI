import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'
const ButtonDown = ({ count }) => {
    const { data, handleCountDown } = useContext(CounterContext)
    return (
        <button className="btn btn-secondary"
            disabled={data.disabled}
            onClick={() => 
                handleCountDown(count || 1)} >
            -{ count }
        </button>
    )
}

export default ButtonDown