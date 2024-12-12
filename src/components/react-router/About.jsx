import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <h1 className="mb-5">This is About page</h1>
            <Link className="py-2 px-4 mr-5 mt-10 bg-amber-300" to="team"><button>Team</button></Link> 
            <Link className="py-2 px-4 bg-amber-300" to="history"><button>History</button></Link> 
            <Outlet />         
        </>
    );
};

export default About;