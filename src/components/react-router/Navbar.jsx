import { NavLink } from "react-router-dom";

const Navbar = () => {
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
                    to="/about"
                >
                    About
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
        </>
    );
};

export default Navbar;