const Skeleton = () => {
    return (
        <div className="flex gap-5 justify-center">
            {/* Skeleton Loader 1 */}
            <div className="flex items-center flex-col">
                <h2 className="w-full h-10 text-2xl my-5 bg-gray-300 animate-pulse rounded-lg"></h2>
                <div className="w-80 h-80 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>

            {/* Skeleton Loader 2 */}
            <div className="flex items-center flex-col">
                <h2 className="w-full h-10 text-2xl my-5 bg-gray-300 animate-pulse rounded-lg"></h2>
                <div className="w-80 h-80 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>

            {/* Skeleton Loader 3 */}
            <div className="flex items-center flex-col">
                <h2 className="w-full h-10 text-2xl my-5 bg-gray-300 animate-pulse rounded-lg"></h2>
                <div className="w-80 h-80 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
        </div>
    );
};

export default Skeleton;