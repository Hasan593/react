import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const ErrorBoundary = () => {

    const { showBoundary } = useErrorBoundary();
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/1`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                showBoundary();
            })
            .then(response => setData(response))
    }, [showBoundary]);

    return (
        <>
            <h1>{data?.title}</h1>
        </>
    );
};

export default ErrorBoundary;