import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/forms/textInput/Input';
import Button from '../../components/ui/button/Button';
import { loginUser } from '../../services/queries';
import Cookies from 'js-cookie'

const Login = () => {

    const navigate = useNavigate()

    /********** state ************/
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState({
        username: true,
        password: true
    });
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    /********** state ************/

    useEffect(() => {
        (error.username || error.password) ? setDisabled(true) : setDisabled(false)
    }, [error])

    const loginHandler = () => {
        setLoading(true)
        loginUser({
            username: userData.username,
            password: userData.password,
        })
            .then(res => {
                setLoading(false)
                Cookies.set('token', res.token)
                toast.success(res?.message)
                navigate('/home')
            }).catch(err => {
                setLoading(false)
                toast.error(err?.response?.data?.errorMessage)
            })
    }

    return (
        <div className='mb-[60px]'>
            <Input
                type='text'
                placeholder="نام کاربری خود را وارد کنید"
                iconName="user"
                value={userData?.username}
                onChange={e => setUserData({ ...userData, username: e.target.value })}
                rule="required"
                errorMessage="نام کاربری اجباری می باشد"
                haveError={e => setError({ ...error, username: e })}
            />
            <Input
                type='password'
                placeholder="رمز عبور خود را وارد کنید"
                iconName="passwordHide"
                value={userData?.password}
                onChange={e => setUserData({ ...userData, password: e.target.value })}
                rule="required"
                errorMessage="رمز عبور خود را وارد کنید"
                haveError={e => setError({ ...error, password: e })}
            />
            <div className="mt-5">
                <Button
                    active={true}
                    title="ورود"
                    onClick={loginHandler}
                    disabled={disabled}
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default Login