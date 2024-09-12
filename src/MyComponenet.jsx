import React, {useState, useEffect} from "react"

function MyComponent() {
      
    const [count, setCount] = useState(Number(localStorage.getItem('count')))

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        if (count == 0) {
            console.log("0 is the minimum number!")
            return
        }
        setCount(count-1)
    }

    const reset = () => {
        setCount(0) 
    }

    const [value, setValue] = useState('');

    const setCounter = () => {
        if (value == "") {return}
        setCount(Number(value))
        setValue("")
    }


    const handleChange = (event) => {
        const newValue = event.target.value;
        if (/^\d*$/.test(newValue) && Number(newValue) <= 10000000000000000) {
            setValue(newValue);
        }
    };

    return(
    <>
    <h1 id="counter-text">{count}</h1>
    <button id="decrement-button" className="counter-button" onClick={decrement}>Decrement</button>
    <button id="reset-button" className="counter-button" onClick={reset}>Reset</button>
    <button id="increment-button" className="counter-button" onClick={increment}>Increment</button>
    <div id="textbox-div">
    <input id="textbox" placeholder="Custom value..." inputMode="" value={value} onChange={handleChange}/>
    </div>
    <div id="button-container">
    <button id="set-button" className="counter-button" onClick={setCounter}>&nbsp; Set Counter&nbsp;</button>
    </div>
    </>)

}

export default MyComponent