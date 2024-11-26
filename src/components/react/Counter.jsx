import { useState } from "react";


const Counter = () => {
    
    const [count, setCount] = useState(0);
    const changeCount = cn => cn?setCount(count + 1):count?setCount(count - 1):count;


    const object = {
        name: "Hasan",
        value: 1
    };
    const [obj, setObj] = useState(object);
    const changegObj = ob => ob?setObj({...obj, value: obj.value + 1}):obj.value?setObj({...obj, value: obj.value - 1}):obj.value;


    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={()=>changeCount('')}>dicrement</button>
            <button onClick={()=>changeCount('Hasan')}>Increment</button>

            <h1>Object Counter: {obj.value}</h1>
            <button onClick={()=>changegObj()}>Object -</button>
            <button onClick={()=>changegObj(1)}>Object +</button>
        </>
    );
};

export default Counter;