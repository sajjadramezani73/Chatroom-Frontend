import { useState } from 'react';
import Logo from '../assets/images/logo.webp'
import Button from '../components/ui/button/Button'
import Login from '../containers/login/Login';
import SignUp from '../containers/signUp/SignUp';
import VectorWomen from '../assets/images/vector-woman.svg'

const SignupLogin = () => {

    const [mode, setMode] = useState('login');

    return (
        <div className="h-full bg-primary p-6 signupLogin">
            <div className='flex items-stretch h-full'>
                <div className="w-9/12 h-full bg-white rounded-2xl">
                    <div className="w-[400px] mx-auto pt-20 rtl">
                        {mode === 'login' && <Login />}
                        {mode === 'signUp' && <SignUp />}
                    </div>
                </div>
                <div className="w-3/12 flex flex-col justify-between">
                    <div className="">

                    </div>
                    <div className="">
                        <img src={VectorWomen} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupLogin