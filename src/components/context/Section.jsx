/* eslint-disable react/prop-types */
import { useContext } from "react";
import { numberContext } from "../../context/contextFile";

const Section = ({children}) => {

    const numberData = useContext(numberContext);

    return (
        <>
            <section className="p-3 m-1 rounded-md border-2">
                <numberContext.Provider value={numberData + 1}>
                    {children}
                </numberContext.Provider>
            </section>
        </>
    );
};

export default Section;