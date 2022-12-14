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
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const [error, setError] = useState({
        username: true,
        password: true,
        confirmPassword: true,
        gender: true
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
        (error.username || error.password || error.confirmPassword || error.gender) ? setDisabled(true) : setDisabled(false)
    }, [error])


    const signupHandler = () => {
        setLoading(true)
        signupUser({
            username: userData.username,
            password: userData.password,
            gender: userData.gender
        })
            .then(res => {
                setLoading(false)
                toast.success(res?.message)
                setUserData({ username: '', password: '', confirmPassword: '', gender: '' })
                setActiveGender('')
            }).catch(err => {
                setLoading(false)
                toast.error(err?.response?.data?.errorMessage)
            })
    }

    return (
        <Fragment>
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
                        key={item.id}
                        title={item.title}
                        checked={checkedGender}
                        onClick={() => {
                            setActiveGender(item.id)
                            setUserData({ ...userData, gender: item.id })
                            setError({ ...error, gender: false })
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