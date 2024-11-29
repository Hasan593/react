import { useFetchAxios } from "./useFetchAxios";
import { usePostAxios } from "./usePostAxios";

const AxiosLayout = () => {

    const reqData = {
        title: 'Hasan',
        body: 'Good',
        userId: 1
    };

    // const { postData, postLoading, postError } = usePostAxios('/posts', reqData); // post data
    const { postData, postLoading, postError } = usePostAxios('/posts/1', reqData); // Update data + Patch Data + Interceptor Data
    console.log(postData);
    console.log(postLoading);
    console.log(postError);

    const { data, loading, error } = useFetchAxios('/users'); // Fetch Data
    console.log(data);
    console.log(loading);
    console.log(error);

    return (
        <>
            <p>{data?.name}</p>
        </>
    );
};

export default AxiosLayout;