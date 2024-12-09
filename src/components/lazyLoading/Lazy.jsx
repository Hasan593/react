import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const Lazy = () => {
    
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
    }, [showBoundary])

    return (
        <>
            <div className="flex gap-5 justify-center">
                <div>
                    <h2 className="text-2xl my-5 font-bold">The pickture of flower</h2>
                    <img className="w-80 h-80" src="https://images.pexels.com/photos/64272/blossom-bloom-flower-red-64272.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
                <div>
                    <h2 className="text-2xl my-5 font-bold">The pickture of flower</h2>
                    <img className="w-80 h-80" src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
                <div>
                    <h2 className="text-2xl my-5 font-bold">The pickture of rose</h2>
                    <img className="w-80 h-80" src="https://images.pexels.com/photos/707696/pexels-photo-707696.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
            </div>
            <h1 className="text-2xl my-5">Title: {data?.title}</h1>
        </>
    );
};

export default Lazy;