import { useContext } from "react";
import { propsFile } from "../../context/contextFile";

const Components_C = () => {

    const data = useContext(propsFile);

    return (
        <>
            <h1>{data}</h1>
        </>
    );
};

export default Components_C;