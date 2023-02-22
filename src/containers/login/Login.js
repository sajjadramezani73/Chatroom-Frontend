import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/forms/textInput/Input';
import Button from '../../components/ui/button/Button';
import { loginUser } from '../../services/queries';
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/userSlice';

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    /********** state ************/
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    /********** state ************/

    useEffect(() => {
        userData.username === '' || userData.password === '' ? setDisabled(true) : setDisabled(false)
    }, [userData]);

    const loginHandler = () => {
        setLoading(true)
        loginUser({
            username: userData.username,
            password: userData.password,
        })
            .then(res => {
                dispatch(addUser(res?.user));
                setLoading(false)
                Cookies.set('token', res?.token)
                toast.success(res?.message)
                navigate('/home')
            }).catch(err => {
                setLoading(false)
                toast.error(err?.response?.data?.errorMessage)
            })
    }

    return (
        <div className=''>
            <div className="text-center mb-12">
                <p className='text-2xl text-caption font-medium'>ورود به حساب</p>
                <p className='text-tiny text-captionLight mt-2'>برای استفاده ابتدا وارد شوید</p>
            </div>
            <div className="mb-4">
                <Input
                    type='text'
                    placeholder="نام کاربری"
                    value={userData?.username}
                    onChange={e => setUserData({ ...userData, username: e.target.value })}
                    rule="required"
                />
            </div>
            <div className="mb-4">
                <Input
                    type='password'
                    placeholder="رمز عبور"
                    iconName="passwordHide"
                    value={userData?.password}
                    onChange={e => setUserData({ ...userData, password: e.target.value })}
                    rule="required"
                />
            </div>
            <div className="pt-5">
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