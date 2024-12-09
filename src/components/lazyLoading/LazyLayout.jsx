import { lazy, Suspense } from "react";
import Skeleton from "./Skeleton.jsx";
import { ErrorBoundary } from "react-error-boundary";

const LazyLayout = () => {

    const LazyImg = lazy(() => import('./Lazy.jsx'));

    return (
        <>
            <h1 className="font-bold text-3xl text-center my-10 text-rose-600 underline">This is Skeleton</h1>
            <ErrorBoundary fallback={'একটি error পাওয়া গেছে'}>
                <Suspense fallback={<Skeleton />}>
                    <LazyImg />
                </Suspense>
            </ErrorBoundary>
        </>
    );
};

export default LazyLayout;