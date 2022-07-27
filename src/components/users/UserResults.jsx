import { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";

function UserResults() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const result = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
        const data = await result.json();

        setUsers(data);
        setLoading(false)
    }
    
    if(!loading) {
        return (
            <div className="grid grid-cols1 gap-8 xl:grid-cols-4 lg:grid-col-3 md:grid-cols-2">
                {users.map((user, index) => (
                    <h3 key={index}>{user.login}</h3>
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }
    
}

export default UserResults;