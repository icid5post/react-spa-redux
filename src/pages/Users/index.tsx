import React, {useEffect} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Users: React.FC = () => {

    const {users, loading, error} = useTypedSelector(state=>state.users);
    const {fetchUsers} = useActions();

    useEffect(()=> {
        fetchUsers();
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return (
        <div>
            {
                users.map((item)=> {
                    return (
                        <div key={item._id}>{item.email}</div>
                    )
                })
            }
        </div>
    );
};

export default Users;
