import { useEffect, useState } from "react";

const User = () => {

    const [userData, setUserData] = useState([]);

    // useEffect(()=>{
    //     const fetchFun = async ()=>{
    //         const fetchData = await fetch(`https://jsonplaceholder.typicode.com/users`);
    //         const data = await fetchData.json();
    //         setUserData(data);
    //         // console.log(data);
    //     };
    //     fetchFun();
    // }, []);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setUserData(data))
    }, []);

    return (
        <>
           {
            userData.length > 0 && userData.map((user) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ))
           }
        </>
    );
};

export default User;