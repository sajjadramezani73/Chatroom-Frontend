import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Conversations from "../containers/conversations/Conversation";
import SidebarLinks from "../containers/sidebarLinks/SidebarLinks";
import Avatar from "../containers/user/Avatar";
import { getIndex } from "../services/queries";
import { addUser } from "../store/userSlice";
import LoadSvgIcon from '../utils/LoadSvgIcon'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(store => store.user);
    console.log('user', user);

    useEffect(() => {
        if (user == null) {
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

    const logoutHandler = () => {
        navigate('/signup-login')
        Cookies.remove('token');
        dispatch(addUser(null));
    }

    return (
        <div className="w-full h-full bg-captionLight flex items-stretch ">
            <div className="flex">
                <div className="w-[100px] min-w-[100px] bg-grayExtraDark">
                    <div className="h-full flex flex-col justify-between">
                        <div className="pt-20">
                            <Avatar />
                            <div className="mt-16">
                                <SidebarLinks />
                            </div>
                        </div>
                        <span className="cursor-pointer flex justify-center py-6 hover:bg-grayDark duration-300"
                            onClick={() => logoutHandler()}>
                            <LoadSvgIcon name="exit" color="var(--color-light)" />
                        </span>
                    </div>
                </div>
                <div className="w-[320px] min-w-[320px] bg-grayDark"></div>
                {/* <Conversations /> */}
            </div>
            <div className="bg-grayLight grow p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Home