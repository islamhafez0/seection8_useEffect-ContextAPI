import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'
const ButtonUp = ({ count }) => {
    const { data, handleCountUp } = useContext( CounterContext )
    return (
        <button className="btn"
            disabled={data.disabled}
            onClick={() => 
                handleCountUp(count || 1)
            }
        >
            +{count}
        </button>
    )
}

export default ButtonUp