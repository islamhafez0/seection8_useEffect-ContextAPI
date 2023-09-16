// useReducer
import { useContext, useReducer } from "react";
import Counter from './components/Counter';
import CounterContext from "./context/CounterContext";
import { CounterState } from "./context/CounterContext";
import DisableBtn from "./components/DisableBtn";
const App2 = () => {
    const { data, handleToggleDisable } = useContext(CounterContext)
    return (
        <CounterState>
        <div className="App">
            <div>
                <DisableBtn />
                <Counter />
            </div>
        </div>
        </CounterState>
    )
}

export default App2