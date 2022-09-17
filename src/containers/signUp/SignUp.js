import React, { Fragment, useState } from 'react'
import Checkbox from '../../components/forms/checkbox/Checkbox';
import Input from '../../components/forms/textInput/Input'
import Button from '../../components/ui/button/Button';

const SignUp = () => {

    /********** state ************/
    const [userData, setUserData] = useState({
        mobile: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const [error, setError] = useState({
        mobile: true,
        password: true,
        confirmPassword: true,
        gender: true
    });
    const [loading, setLoading] = useState(false);
    const [activeGender, setActiveGender] = useState('');
    const [genders] = useState([
        { id: 'male', title: 'مرد' },
        { id: 'famale', title: 'زن' }
    ]);
    /********** state ************/

    const signupHandler = () => {

    }

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
                value={userData?.confirmPassword}
                onChange={e => setUserData({ ...userData, confirmPassword: e.target.value })}
                rule="required"
                errorMessage="رمز عبور خود را وارد کنید"
                haveError={e => setError({ ...error, confirmPassword: e })}
            />
            <div className='flex items-center mt-3 pr-2'>
                {genders.map(item => {
                    const checkedGender = item.id === activeGender ? true : false
                    return <Checkbox
                        title={item.title}
                        checked={checkedGender}
                        onClick={() => {
                            setActiveGender(item.id)
                            setUserData({ ...userData, gender: item.id })
                        }}
                    />
                })}
            </div>
            <div className="mt-5">
                <Button
                    active={true}
                    title="ثبت نام"
                    onClick={signupHandler}
                    loading={loading}
                />
            </div>
        </Fragment>
    )
}

export default SignUp