import Cart from "./Cart";
import Form from "./Form";
import { useFetch } from "./hooks/useFetch";
import { useWindowSize } from "./hooks/useWindowSize";

const CustomLayout = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log(data, loading, error);

    const size = useWindowSize();
    return (
        <>
            <h1 className="text-center text-3xl font-bold mb-5">Custom Hook</h1>
            <Form />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <p className="text-xl font-semibold mb-2">Window Width: <span className="text-blue-500">{size.width}</span></p>
                    <p className="text-xl font-semibold">Window Height: <span className="text-blue-500">{size.height}</span></p>
                </div>
            </div>

            <Cart />
        </>
    );
};

export default CustomLayout;