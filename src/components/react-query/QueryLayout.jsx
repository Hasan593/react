// react query নাম চেঞ্জ করে এখন tanStack হয়েছে

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes, useLocation, NavLink } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Posts from './Posts';
import Home from './Home';
import Users from './Users';
import Login from './Login';
import Footer from './Footer';

const queryClient = new QueryClient();

const QueryLayout = () => {

    const location = useLocation();

    return (
        <>
            <nav className="m-10 flex gap-3">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "py-3 px-10 bg-blue-500 text-white" : "py-3 px-10 bg-slate-500"
                    }
                    to="/"
                >
                    Home
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        isActive ? "py-3 px-10 bg-blue-500 text-white" : "py-3 px-10 bg-slate-500"
                    }
                    to="/posts"
                >
                    Posts
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        isActive ? "py-3 px-10 bg-blue-500 text-white" : "py-3 px-10 bg-slate-500"
                    }
                    to="/users"
                >
                    Users
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        isActive ? "py-3 px-10 bg-blue-500 text-white" : "py-3 px-10 bg-slate-500"
                    }
                    to="/login"
                >
                    Login
                </NavLink>
            </nav>

            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
                <ReactQueryDevtools initialIsOpen={false} position='left-right' />
            </QueryClientProvider>
            {location.pathname !== '/login' && <Footer />}
        </>
    );
};

export default QueryLayout;
