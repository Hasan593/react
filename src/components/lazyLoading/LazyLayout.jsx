import { lazy, Suspense } from "react";
import Skeleton from "./Skeleton.jsx";

const LazyLayout = () => {

    const LazyImg = lazy(() => import('./Lazy.jsx'));

    return (
        <>
            <h1 className="font-bold text-3xl text-center my-10 text-rose-600 underline">This is Skeleton</h1>
            
            <Suspense fallback={<Skeleton />}>
                <LazyImg />
            </Suspense>
        </>
    );
};

export default LazyLayout;