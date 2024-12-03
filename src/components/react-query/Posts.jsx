import { useQuery } from "@tanstack/react-query";
import axios from "../../utils/axios";
import Home from "./Home";

const Posts = () => {

    const fetchPosts = async () => {
        const res = await axios.get(`/posts`);
        return res.data;
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'], // এখানে key একটি অ্যারে হতে হবে
        queryFn: fetchPosts,   // ফাংশন সরাসরি দিতে হবে
        // cacheTime: 1000 * 60 * 5,  // cacheTime কতক্ষন থাকবে সেটা
        // staleTime: 1000 * 60 * 5,  // api রিকোয়েস্ট কতক্ষন বন্ধ থাকবে সেটা
        // refetchInterval: 1000 * 60 * 5,  // এই সময় পর ক্যাশ মুছে, এপিআই রিকোয়েষ্ট করে, ব্রাউজার অটোমেটিক রিফ্রেশ হবে।
    });
    // console.log(data)

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message} </div>;

    return (
        <>
            <Home />
            {
                data.map(post => (
                    <div key={post.id} className="m-10">
                        <h3><span className="text-3xl">Title:</span> {post.title}</h3>
                        <p><span className="text-3xl">Post Content:</span> {post.content}</p>
                    </div>
                ))
            }
        </>
    );
};

export default Posts;