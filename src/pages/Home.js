import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <div className="w-full h-full bg-captionLight flex justify-center items-center">
            <div className="w-[90%] h-[90%] flex gap-4">
                <div className="bg-white grow rounded-md shadow">
                    <Outlet />
                </div>
                <div className="bg-white w-[330px] rounded-md shadow">user</div>
            </div>
        </div>
    )
}

export default Home