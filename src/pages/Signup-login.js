import { useState } from 'react';
import Logo from '../assets/images/logo.webp'
import Button from '../components/ui/button/Button'
import Login from '../containers/login/Login';
import SignUp from '../containers/signUp/SignUp';

const SignupLogin = () => {

    const [mode, setMode] = useState('login');

    return (
        <div className="h-full bg-captionLight flex md:items-center justify-center rtl signupLogin">
            <div className='container mx-auto'>
                <div className="bg-white shadow-card rounded grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                    <div className=''>
                        <div className="logo flex justify-center">
                            <img src={Logo} alt="logo" className="w-48" />
                        </div>
                        <div className="flex justify-center px-4 lg:px-8 xl:px-12 2xl:px-16">
                            <Button
                                active={mode === 'login'}
                                // width={true}
                                title="ورود به حساب کاربری"
                                onClick={() => setMode('login')}
                            />
                            <span className='px-2'></span>
                            <Button
                                active={mode === 'signUp'}
                                // width={true}
                                title="ایجاد حساب کاربری"
                                onClick={() => setMode('signUp')}
                            />
                        </div>
                        <div className='py-4 px-4 lg:px-8'>
                            {mode === 'login' && <Login />}
                            {mode === 'signUp' && <SignUp />}
                        </div>
                    </div>
                    <div className='linear-bg py-10 md:py-0'>
                        <div className='h-full flex flex-col justify-center px-10 text-white font-bold'>
                            <p className='text-2xl mb-4'>ما فراتر از یک شرکت هستیم.</p>
                            <p className='text-sm text-light leading-6'>این یکی از بزرگترین دنیاهای واقعیت مجازی و گفتگو آنلاین است. می‌توانید
                                آواتار خود را بسازید و با افراد جدید ملاقات کنید
                                و با هرکسی که می خواهید ارتباط برقرار نمایید.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupLogin