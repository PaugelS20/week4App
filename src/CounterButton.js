import { useEffect } from "react";

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    console.log("CounterButton Rendering");
    useEffect(()=> {
        console.log('useEffect Function called!');
        }, []);

    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <button onClick={onIncrement}>Click Me</button>
        </>
    );
}