import { useEffect, useState } from "react"
import axios from "../../../utils/axios";

export const usePostAxios = (url, data) => {
    const [postData, setPostData] = useState(null);
    const [postLoading, setPostLoading] = useState(null);
    const [postError, setPostError] = useState(null);

    /********************** Post Data ********************/
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.post(url, data);
    //             setPostData(response.data);
    //             setPostLoading(false);
    //         } catch (error) {
    //             setPostLoading(false);
    //             setPostError(error.message);
    //         }
    //     };
    //     fetchData();
    // }, [url]);
    
    /********************** Update Data *******************/
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.put(url, data);
    //             setPostData(response.data);
    //             setPostLoading(false);
    //         } catch (error) {
    //             setPostLoading(false);
    //             setPostError(error.message);
    //         }
    //     };
    //     fetchData();
    // }, [url]);

    /********************* Patch Data *******************/
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.patch(url, data, {headers: {'privicy' : 'Md Hasan Uddin'}});
                setPostData(response.status);
                setPostLoading(false);
            } catch (error) {
                setPostLoading(false);
                setPostError(error.message);
            }
        };
        fetchData();
    }, [url]);

    return { postData, postLoading, postError };
};