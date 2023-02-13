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
                    <div className="w-[400px] mx-auto pt-16 rtl">
                        {mode === 'login' && <Login />}
                        {mode === 'signup' && <SignUp />}
                        <div className="pt-8 flex justify-center items-center">
                            <p className="text-tiny text-captionLight ml-3">
                                {mode === 'login' && 'حساب کاربری ندارید؟'}
                                {mode === 'signup' && 'از قبل حساب کاربری دارید؟'}
                            </p>
                            <div className="text-tiny text-primary font-bold">
                                {mode === 'login' && (
                                    <button onClick={() => setMode('signup')}>ثبت نام</button>
                                )}
                                {mode === 'signup' && (
                                    <button onClick={() => setMode('login')}>ورود</button>
                                )}
                            </div>
                        </div>
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