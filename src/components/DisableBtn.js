import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'
const DisableBtn = () => {
    const { data, handleToggleDisable } = useContext(CounterContext)
    return (
    <button className="btn small" onClick={handleToggleDisable} >
        {data.disabled ? 'Resume' : 'Stop'}
    </button>
    )
}

export default DisableBtn