/* eslint-disable react/prop-types */

import { memo } from "react";

const Button = ({ handler, children }) => {
    
    console.log(`'Render ${children} Button Component'`);

    return <button
        onClick={handler}
        className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        > {children} </button>

};

export default memo(Button);