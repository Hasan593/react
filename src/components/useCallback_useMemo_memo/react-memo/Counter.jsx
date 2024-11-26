/* eslint-disable react/prop-types */

import { memo } from "react";

const Counter = ({ name, counter}) => {
    
    console.log('Render Counter Component');

    return <p className="text-2xl">{name} Value is {counter}</p>
};

export default memo(Counter);