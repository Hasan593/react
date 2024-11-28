import { useEffect, useState } from "react"
import axios from "../../../utils/axios";

export const useFetchAxios = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};