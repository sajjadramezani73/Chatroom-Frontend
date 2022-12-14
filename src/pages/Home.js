import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import UserInfo from "../components/userInfo/UserInfo";
import Conversations from "../containers/conversations/Conversation";
import { getIndex } from "../services/queries";
import { addUser } from "../store/userSlice";

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store => store.user);
    console.log('user', user);

    useEffect(() => {
        if (user.user == null) {
            getIndex('/api/application/index')
                .then(res => {
                    res.user !== null ? dispatch(addUser(res.user)) : dispatch(addUser(null))
                    res.userValid !== true && navigate('/signup-login')
                })
                .catch(err => {
                    console.log(err)
                    navigate('/signup-login')
                })
        }
    }, [])

    return (
        <div className="w-full h-full bg-captionLight flex justify-center items-center">
            <div className="w-[90%] h-[90%] flex gap-4">
                <div className="bg-white w-[330px] min-w-[330px] flex flex-col justify-between rounded-md shadow p-4">
                    <UserInfo user={user?.user} />
                    <Conversations />
                </div>
                <div className="bg-white grow rounded-md shadow p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home