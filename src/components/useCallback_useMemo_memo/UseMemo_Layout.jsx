import { useState } from "react";
import Title from "./react-memo/Title";
import Counter from "./react-memo/counter";
import Button from "./react-memo/Button";
import { useCallback } from "react";
import { useMemo } from "react";

const UseMemo_Layout = () => {

    const [ count_1, setCount_1 ] = useState(0);        // 2
    const [ count_2, setCount_2 ] = useState(0);        // 5

    const handleAddTwoCounter = useCallback(() => {
        setCount_1(pre => pre + 2);    
    }, []);

    const handleAddFiveCounter = useCallback(() => {
        setCount_2(prev => prev + 5);
    }, []);

    const expensiveOparetion = useMemo(() => {
        let result = 0; 
        for (let i = 0; i < 500000000; i++) {
            result += count_1 + i
        }
        return result;
    }, [count_1])

    return (
        <>
            <Title title='We are learning React Memoization' />
            <hr />
            <Counter counter={count_1} name='Counter_1'/>
            <Button handler={handleAddTwoCounter}>Increment By Two</Button>
            <hr />
            <Counter counter={count_2} name='Counter_2' />
            <Button handler={handleAddFiveCounter}>Increment By Five</Button>
            <h1 className="text-2xl">Expensive Oparetion: {expensiveOparetion}</h1>
        </>
    );
};

export default UseMemo_Layout;