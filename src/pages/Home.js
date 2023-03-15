import Cookies from "js-cookie";
import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
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

    const [selectedLink, setSelectedLink] = useState('pvs');

    const ComponentLeader = (componentName) => {
        if (componentName !== '') {
            const Component = lazy(() => import('../containers/sidebar/' + componentName))
            if (Component) return <Component />
        } else {
            return null
        }
    }

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
            <div className="flex h-full">
                <div className="w-[100px] min-w-[100px] bg-white border-r-2 border-r-light">
                    <div className="h-full flex flex-col justify-between">
                        <div className="pt-20">
                            <Avatar />
                            <div className="mt-16">
                                <SidebarLinks changeLink={value => setSelectedLink(value)} />
                            </div>
                        </div>
                        <span className="cursor-pointer flex justify-center py-6 hover:bg-light/50 duration-300"
                            onClick={() => logoutHandler()}>
                            <LoadSvgIcon name="exit" color="var(--color-captionLight)" />
                        </span>
                    </div>
                </div>
                <div className="w-[320px] min-w-[320px] bg-white h-full flex flex-col">
                    <div className="p-4 border-b-2 border-b-light">
                        <div className="flex items-center bg-light/50 py-2 px-3 rounded-full rtl">
                            <input
                                type="text"
                                placeholder="جستجو"
                                className="w-full bg-transparent outline-none placeholder:text-captionLight/50 text-caption text-xs"
                            />
                            <LoadSvgIcon name="search" size={20} color="var(--color-captionLight)" />
                        </div>
                    </div>
                    <div className="p-4 flex-grow overflow-hidden overflow-y-auto no-scroll grid content-start gap-y-2">
                        <Suspense >
                            {ComponentLeader(selectedLink)}
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className="bg-grayLight grow p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Home