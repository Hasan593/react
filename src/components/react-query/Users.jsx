import { useEffect, useState } from "react";
import axios from "../../utils/axios";

const Users = () => {

    const [loading, setLoading] = useState(true);
    const [ error, setError ] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/users')
        .then(res => {
            setData(res.data)
            setLoading(false)        
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    }, []);

    if (loading) return <h1>Loading...</h1>
    if (error) return <div>Error: {error.message} </div>;

    return (
        <>
            {
                data.map(user =>

                (
                    <div key={user.id} className="m-10">
                        <h3><span className="text-2xl">User Name:</span> {user.name}</h3>
                        <p><span className="text-2xl">User Email:</span> {user.email}</p>
                    </div>)
                )
            }
        </>
    );
};

export default Users;