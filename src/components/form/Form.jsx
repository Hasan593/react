import { useForm } from "react-hook-form"

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const submit = data => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(submit)} className="p-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-medium">Title:</label>
                    <input
                        {...register('title', { required: true })} // register যেগুলো রির্টান করে const { required, min, max, minLength, maxLength, pattern, validate } = register("title")
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="Enter Title"
                    />
                    {errors.title?.type === "required" && (
                        <p role="alert">First name is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-lg font-medium">Content:</label>
                    <input
                        {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/ })}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="Enter Email"
                    />
                    {errors.email && <p>plz give me currect email</p>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default Form;