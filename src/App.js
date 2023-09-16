import { useState, useEffect, useRef } from "react";
import Heading from "./heading";
/*
  Life cycle of react component {
    - mount
    - update
    - unmount
  }
*/
function App() {
// brieflly
// 1- mount
  useEffect(() => {}, [])
// 2- all updates
  useEffect(() => {})
// 3- dependency updates
  useEffect(() => {}, ['dep1', 'dep2'])
// 4- unmount
  useEffect(() => {
    // code to execute
    return () => {
      // cleanup function
    }
  })



  const [count, setCount] = useState(1)
  const [disabled, setDisabled] = useState(false)
  let isLogged = useRef(true)
  // mount only
  useEffect(() => {
    if(isLogged.current) {
      console.log("useEffect --mount")
      isLogged.current = false
    }
  }, [])
  /*
    // mount & dep update
    useEffect(() => {
      console.log('useEffect --update on count change')
    }, [count])
  // mount & any update
  useEffect(() => {
    console.log("useEffect --update")
  })
  */
  
  const handleCountUp = () => {
    setCount(c => c + 1)
  }
  const handleCountDown = () => {
    setCount(c => c - 1)
  }

  const handleToggleDisable = () => {
    setDisabled(!disabled)
  }

  return (
    <div className="App">
      <Heading />
      <div>
        <button className="btn small" onClick={handleToggleDisable} >
          {disabled ? 'Resume' : 'Stop'}
        </button>
      </div>
      <div className="app-counter" >
        <button className="btn" disabled={disabled} onClick={handleCountUp} >
          +
        </button>
        <div className="counter"> {count} </div>
        <button className="btn btn-secondary" disabled={disabled} onClick={handleCountDown} >
          -
        </button>
      </div>
      {disabled && (
        <User />
      )}
    </div>
  )
}

const User = () => {
  const [user, setUser] = useState('Eslam')


  useEffect(() => {
    const timer = setTimeout(() => {
      setUser("Eslam Hafez")
      console.log("user effected")
    }, 300)

    return () => {
      console.log("Unmount")
      clearTimeout(timer)
    }
  }, [])
  return (
    <h3>{ user }</h3>
  )
}



export default App;