import React, { Fragment, useState } from 'react'
import Input from '../../components/forms/textInput/Input'
import Button from '../../components/ui/button/Button';

const SignUp = () => {

    /********** state ************/
    const [userData, setUserData] = useState({
        mobile: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({
        mobile: true,
        password: true,
        confirmPassword: true
    });
    const [loading, setLoading] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    /********** state ************/

    return (
        <Fragment>
            <Input
                type='text'
                placeholder="نام کاربری خود را وارد کنید"
                iconName="user"
                value={userData?.mobile}
                onChange={e => setUserData({ ...userData, mobile: e.target.value })}
                rule="required"
                errorMessage="نام کاربری اجباری می باشد"
                haveError={e => setError({ ...error, mobile: e })}
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
            <Input
                type='password'
                placeholder="تکرار رمز عبور خود را وارد کنید"
                iconName="passwordHide"
                value={userData?.password}
                onChange={e => setUserData({ ...userData, confirmPassword: e.target.value })}
                rule="required"
                errorMessage="رمز عبور خود را وارد کنید"
                haveError={e => setError({ ...error, confirmPassword: e })}
            />
            <div className="mt-5">
                <Button
                    active={true}
                    title="ثبت نام"
                    onClick={() => console.log('login')}
                />
            </div>
        </Fragment>
    )
}

export default SignUp