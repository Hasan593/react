import { useRef, useState } from "react";

const UseRef = () => {

    const [now, setNow] = useState(null);
    const [start, setStart] = useState(null);
    let intervalRef = useRef(null);

    const handleStart = () => {
        setNow(Date.now());
        setStart(Date.now());

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
    }

    let secondsPassed = 0;
    if (now != null && start != null) {
        secondsPassed = (now - start) / 1000;
    }


    let inputRef = useRef(null);

    return (
        <>
            <div className="text-3xl text-center">
                <p>Timer: {secondsPassed.toFixed(3)}</p>
                <div className="flex gap-5 justify-center mt-5">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleStart}>Start</button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleStop}>Stop</button>
                </div>
            </div>
            <input type="text" name="" id="" ref={inputRef} />
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>inputRef.current.focus()}>Stop</button>
        </>
    );
};

export default UseRef;