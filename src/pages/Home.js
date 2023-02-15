import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Conversations from "../containers/conversations/Conversation";
import { getIndex } from "../services/queries";
import { addUser } from "../store/userSlice";
import LoadSvgIcon from '../utils/LoadSvgIcon'

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
        <div className="w-full h-full bg-captionLight flex items-stretch ">
            <div className="flex">
                <div className="w-[100px] min-w-[100px] bg-grayExtraDark">
                    <div className="h-full flex flex-col justify-between">
                        <div className="pt-20">
                            <div className="w-16 h-16 rounded-full bg-red-200 mx-auto cursor-pointer"></div>
                            <div className="mt-16"></div>
                        </div>
                        <span className="cursor-pointer flex justify-center py-6 hover:bg-grayDark duration-300">
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