import { BrowserRouter } from "react-router-dom";
import QueryLayout from "./QueryLayout";

const RouterQuery = () => {
    return (
        <>
            <BrowserRouter>
                <QueryLayout />
            </BrowserRouter>
        </>
    );
};

export default RouterQuery;