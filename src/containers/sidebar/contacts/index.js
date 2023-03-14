import { useEffect, useState } from 'react'
import Nullpage from '../../../components/nullPage/NullPage';
import UserItem from '../../../components/userItem/UserItem';
import UserItemShimmer from '../../../components/userItem/UserItemShimmer';
import { getUsers } from '../../../services/queries';

const Contacts = () => {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(res => {
                setUsers(res.users)
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, []);

    return (
        <>
            {loading ? (
                [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
                    return <UserItemShimmer key={item} />
                })
            ) : (
                users.length > 0 ? (
                    users.map(item => {
                        return <UserItem key={item._id} item={item} />
                    })
                ) : (
                    <Nullpage title="کاربری وجود ندارد" />
                )
            )}
        </>
    )
}

export default Contacts