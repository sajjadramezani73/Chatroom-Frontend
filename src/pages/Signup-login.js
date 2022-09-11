import { useState } from 'react';
import Logo from '../assets/images/logo.webp'
import Button from '../components/ui/button/Button'
import Login from '../containers/login/Login';
import SignUp from '../containers/signUp/SignUp';
const SignupLogin = () => {

    const [mode, setMode] = useState('login');

    return (
        <div className="h-full bg-captionLight flex items-center justify-center signupLogin">
            <div className='container mx-auto'>
                <div className="bg-white shadow-card rounded grid grid-cols-2 overflow-hidden">
                    <div className=''>
                        <div className="logo flex justify-center">
                            <img src={Logo} alt="logo" className="w-48" />
                        </div>
                        <div className="flex justify-center">
                            <Button
                                active={mode === 'login'}
                                width={true}
                                title="ورود به حساب کاربری"
                                onClick={() => setMode('login')}
                            />
                            <span className='px-2'></span>
                            <Button
                                active={mode === 'signUp'}
                                width={true}
                                title="ایجاد حساب کاربری"
                                onClick={() => setMode('signUp')}
                            />
                        </div>
                        <div className='py-4 px-8'>
                            {mode === 'login' && <Login />}
                            {mode === 'signUp' && <SignUp />}
                        </div>
                    </div>
                    <div className='linear-bg'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupLogin