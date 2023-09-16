import React from "react";
import ButtonUp from "./ButtonUp";
import ButtonDown from "./ButtonDown";
import Count from "./Count";

const Counter = () => {
    return (
        <div className="app-counter">
            <ButtonUp count={3}/>
            <ButtonUp />
            <Count />
            <ButtonDown />
            <ButtonDown count={3}/>
        </div>
    )
}
export default Counter;