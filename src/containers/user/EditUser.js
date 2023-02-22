import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Textarea from '../../components/forms/textarea/Textarea';
import Input from '../../components/forms/textInput/Input';
import { avatar } from '../../utils/AvatarSet'
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const EditUser = ({ closeEdit }) => {

    const { user } = useSelector(store => store.user);

    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        setUserInfo(user)
    }, [user]);

    console.log('userInfo', userInfo)
    return (
        <div className="bg-grayDark h-full">
            <div className="flex justify-between items-center px-4 py-4">
                <div className="flex items-center">
                    <span className='cursor-pointer' onClick={closeEdit}>
                        <LoadSvgIcon name="backArrow" color="var(--color-grayLight)" weight={1.5} size={18} />
                    </span>
                    <p className='text-grayLight text-sm ml-4'>ویرایش اطلاعات</p>
                </div>
            </div>
            <div className="flex flex-col items-center px-4">
                <div className="w-[120px] min-w-[120px] h-[120px] rounded-full overflow-hidden relative">
                    <img src={avatar(user)} alt="" className="w-full h-full object-cover" />
                    <span className='absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center cursor-pointer'>
                        <LoadSvgIcon name="cameraPlus" size={50} weight={1} color="#ffffff" />
                    </span>
                </div>
                <div className="mt-8 w-full">
                    <Input
                        type='text'
                        placeholder="نام کاربری"
                        iconName="user"
                        value={userInfo?.username}
                        onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
                        rule="required"
                        theme='dark'
                    />
                </div>
                <div className="mt-8 w-full">
                    <Input
                        type='text'
                        placeholder="نام"
                        iconName="user"
                        value={userInfo?.firstname}
                        onChange={e => setUserInfo({ ...userInfo, firstname: e.target.value })}
                        rule="required"
                        theme='dark'
                    />
                </div>
                <div className="mt-8 w-full">
                    <Input
                        type='text'
                        placeholder="نام خانوادگی"
                        iconName="user"
                        value={userInfo?.lastname}
                        onChange={e => setUserInfo({ ...userInfo, lastname: e.target.value })}
                        rule="required"
                        theme='dark'
                    />
                </div>
                <div className="mt-8 w-full">
                    <Textarea
                        value={userInfo?.bio}
                        iconName="comment"
                        placeholder="متن نظر"
                        rule="required"
                        onChange={e => setUserInfo({ ...userInfo, bio: e.target.value })}
                        attributes={{ rows: 8 }}
                        theme='dark'
                    />
                </div>
            </div>
        </div>
    )
}

export default EditUser