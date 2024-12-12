import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import About from "./About";
import Navbar from "./Navbar";
import Team from "./Team";


const RouterLayout = () => {

    const location = useLocation();

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="about" element={<About />} >
                    <Route path="team" element={<Team />} />
                    <Route path="history" element={<h1 className="text-3xl">HIstory</h1>} />
                </Route>

                <Route path="login" element={<Login />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>

            {location.pathname !== 'login' && <Footer />}
        </>
    );
};

export default RouterLayout;