/* eslint-disable react/prop-types */
import { useContext } from "react";
import { numberContext } from "../../context/contextFile";

const Heading = ({children}) => {

    const numberData = useContext(numberContext);

    switch (numberData) {
        case 1:
            return <h1 className="text-4xl">{children} {numberData}</h1>
        case 2:
            return <h1 className="text-3xl">{children} {numberData}</h1>
        case 3:
            return <h1 className="text-3xl">{children} {numberData}</h1>
            
    }
};

export default Heading;