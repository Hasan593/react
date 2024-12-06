import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../../utils/axios";
import { useState } from "react";

const Posts = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const queryClient = useQueryClient();

    /***************** Get post form server function ***************/
    const fetchPosts = async () => {
        const res = await axios.get(`/posts`);
        return res.data;
    };

    /***************** setd post to server function ***************/
    const writePosts = data => {
        return axios.post('/posts', data);
    };

    /***************** Get post with useQuery form server ***************/
    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'], // এখানে key একটি অ্যারে হতে হবে
        queryFn: fetchPosts,   // ফাংশন সরাসরি দিতে হবে
        // cacheTime: 1000 * 60 * 5,  // cacheTime কতক্ষন থাকবে সেটা
        staleTime: 1000 * 60 * 5,  // api রিকোয়েস্ট কতক্ষন বন্ধ থাকবে সেটা
        // refetchInterval: 1000 * 60 * 5,  // এই সময় পর ক্যাশ মুছে, এপিআই রিকোয়েষ্ট করে, ব্রাউজার অটোমেটিক রিফ্রেশ হবে।
    });

    /***************** send post with useMutation to server ***************/
    const { isPending, isSuccess, isError, mutate } = useMutation({
        mutationFn: writePosts,

        /** server এ ডাটা যাবে এবং ইউআইতে আপডেট হবে। এখানে দুইটা রিকোয়েষ্ট হবে একবার ডাটা যাওয়ার জন্য আর একবার আসার জন্য **/
        // onSuccess: () => { 
        //     queryClient.invalidateQueries('posts');
        // }

        /** pessimistic, আগে servare এ ডাটা যাবে এবং পরে ইউআইতে আপডেট হবে। এখানে একবার রিকোয়েষ্ট হবে শুধু সার্ভারে যাওয়ার সময় **/
        // onSuccess: (res) => {
        //     queryClient.setQueriesData(['posts'], oldData => [...oldData, res.data]);  
        // }

        /** Optimistic update: UI তে আগে আপডেট হবে, তারপর সার্ভারে ডেটা যাবে **/
        onMutate: async (newPost) => {
            // 1. Query ক্লায়েন্ট থেকে আগের ডেটা সংরক্ষণ
            await queryClient.cancelQueries(["posts"]);

            const previousPosts = queryClient.getQueryData(["posts"]);

            // 2. নতুন পোস্টটি UI-তে অস্থায়ীভাবে যোগ করা হচ্ছে
            queryClient.setQueriesData(['posts'], oldData => [...oldData, {...newPost}]); 

            // 3. যদি সার্ভারে সমস্যা হয়, তাহলে পূর্বের ডেটা ফিরিয়ে দেওয়া হবে
            return { previousPosts };
        },

        onError: (error, newPost, context) => {
            // 4. এরর হলে আগের ডেটা পুনরুদ্ধার করা হবে
            queryClient.setQueryData(["posts"], context.previousPosts);
            console.error("Error posting data:", error.message);
        },

        onSettled: () => {
            // 5. শেষ হলে (সফল বা ব্যর্থ) নতুন ডেটা সার্ভার থেকে ফেচ করা হবে
            queryClient.invalidateQueries(["posts"]);
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message} </div>;

    const onsub = e => {
        e.preventDefault();
        mutate({
            title,
            content,
            id: data.length ? (parseInt(data[data.length - 1].id) + 1).toString() : '1'  // 
        })
    };

    return (
        <>
            <form onSubmit={onsub} className="p-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-medium">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="Enter title"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-lg font-medium">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="Enter content"
                        rows="2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>


            {
                data.map(post => (
                    <div key={post.id} className="m-10">
                        <h3 className="text-2xl">
                            Title: <span className="text-[20px]">
                                {post.title}
                            </span>
                        </h3>
                        <h4 className="text-2xl">
                            Post Content: <span className="text-[20px]">
                                {post.content}
                            </span>
                        </h4>
                    </div>
                ))
            }
        </>
    );
};

export default Posts;