import { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Checkbox from '../../components/forms/checkbox/Checkbox';
import Input from '../../components/forms/textInput/Input'
import Button from '../../components/ui/button/Button';
import { signupUser } from '../../services/queries';

const SignUp = () => {

    /********** state ************/
    const [userData, setUserData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [activeGender, setActiveGender] = useState('');
    const [genders] = useState([
        { id: 'male', title: 'مرد' },
        { id: 'famale', title: 'زن' }
    ]);
    /********** state ************/

    useEffect(() => {
        userData.username === '' ||
            userData.firstname === '' ||
            userData.lastname === '' ||
            userData.password === '' ||
            userData.confirmPassword === '' ||
            userData.gender === '' ? setDisabled(true) : setDisabled(false)
    }, [userData]);

    const signupHandler = () => {
        setLoading(true)
        signupUser({
            username: userData.username,
            firstname: userData.firstname,
            lastname: userData.lastname,
            password: userData.password,
            gender: userData.gender
        })
            .then(res => {
                setLoading(false)
                toast.success(res?.message)
                setUserData({ username: '', firstname: '', lastname: '', password: '', confirmPassword: '', gender: '' })
                setActiveGender('')
            }).catch(err => {
                setLoading(false)
                toast.error(err?.response?.data?.errorMessage)
            })
    }

    return (
        <Fragment>
            <div className="text-center mb-12">
                <p className='text-2xl text-caption font-medium'>ثبت حساب</p>
                <p className='text-tiny text-captionLight mt-2'>اکنون حساب خود را ایجاد کنید</p>
            </div>
            <div className="mb-4">
                <Input
                    placeholder="نام کاربری"
                    value={userData?.username}
                    onChange={e => setUserData({ ...userData, username: e.target.value })}
                    rule="required"
                />
            </div>
            <div className="grid grid-cols-2 gap-x-3 mb-4">
                <Input
                    type='text'
                    placeholder="نام"
                    value={userData?.firstname}
                    onChange={e => setUserData({ ...userData, firstname: e.target.value })}
                    rule="required"
                />
                <Input
                    type='text'
                    placeholder="نام خانوادگی"
                    value={userData?.lastname}
                    onChange={e => setUserData({ ...userData, lastname: e.target.value })}
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
            <div className="mb-4">
                <Input
                    type='password'
                    placeholder="تکرار رمز عبور "
                    iconName="passwordHide"
                    value={userData?.confirmPassword}
                    onChange={e => setUserData({ ...userData, confirmPassword: e.target.value })}
                    rule="required"
                />
            </div>
            <div className='flex items-center mt-3 pr-2'>
                {genders.map(item => {
                    const checkedGender = item.id === activeGender ? true : false
                    return <Checkbox
                        key={item.id}
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
                    disabled={disabled}
                />
            </div>
        </Fragment>
    )
}

export default SignUp