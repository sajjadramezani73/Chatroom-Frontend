import Input from '../components/forms/textInput/Input'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/userSlice'
import { useState } from 'react';
import Checkbox from '../components/forms/checkbox/Checkbox';
import Button from '../components/ui/button/Button';
import LoadSvgIcon from '../utils/LoadSvgIcon';
import { updateUser } from '../services/queries';
import { toast } from 'react-toastify';
import { baseUrl } from '../constant';

const UserEdit = () => {

    const dispatch = useDispatch()
    const inputRef = useRef()

    const user = useSelector(store => store.user);

    const [userInfo, setUserInfo] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedPath, setSelectedPath] = useState("");
    // const [error, setError] = useState("");
    const [loadingEdit, setLoadingEdit] = useState(false);
    const [loadingDel, setLoadingDel] = useState(false);
    const [genders] = useState([
        { id: 'male', title: 'مرد' },
        { id: 'famale', title: 'زن' }
    ]);

    useEffect(() => {
        setUserInfo(user?.user)
    }, [user])

    // select file of computer for send to api
    const selectFileHandler = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            if (e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/png") {
                // setError("");
                setSelectedFile(e.target.files[0]);

                const reader = new FileReader();
                reader.onload = (e) => {
                    setSelectedPath(e.target.result);
                };
                reader.readAsDataURL(e.target.files[0]);
            } else {
                setSelectedFile(null);
                setSelectedPath("");
                // setError("فرمت فایل ارسالی شما صحیح نمی باشد.");
            }
        }
    };

    // delete profile user with send id user
    const deleteAvatarHandler = () => {
        setLoadingDel(true)
        updateUser({ id: userInfo?._id, deleteAvatar: 1 })
            .then(res => {
                toast.success(res?.message)
                dispatch(addUser(res.user))
                setSelectedFile(null)
                setSelectedPath('')
                setLoadingDel(false)
            }).catch(err => {
                toast.danger('خطا در برقراری ارتباط. مجددا تلاش کنید')
                setLoadingDel(false)
            })
    }

    //edit information with send id user and other info
    const editUserInfoHandler = () => {
        setLoadingEdit(true)

        const formData = new FormData()
        formData.append("id", userInfo?._id)
        formData.append("username", userInfo?.username)
        formData.append("gender", userInfo?.gender)
        if (selectedFile) {
            formData.append("avatar", selectedFile)
        }

        updateUser(formData)
            .then(res => {
                toast.success(res?.message)
                dispatch(addUser(res.user))
                setLoadingEdit(false)
            }).catch(err => {
                toast.danger('خطا در برقراری ارتباط. مجددا تلاش کنید')
                setLoadingEdit(false)
            })
    }

    return (
        <div className='rtl'>
            <div className="border-b-2 borderLinearColor pb-4">
                <p className='text-xl font-bold text-captionDark'>ویرایش اطلاعات کاربر</p>
            </div>
            <div className="grid grid-cols-2 gap-4 px-24 pt-11">
                <div className=''>
                    <Input
                        type='text'
                        placeholder="نام کاربری خود را وارد کنید"
                        iconName="user"
                        value={userInfo?.username}
                        onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
                        rule="required"
                        errorMessage="نام کاربری اجباری می باشد"
                    // haveError={e => setError({ ...error, username: e })}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    {genders.map(item => {
                        const checkedGender = item.id === userInfo?.gender ? true : false
                        return <Checkbox
                            key={item.id}
                            title={item.title}
                            checked={checkedGender}
                            onClick={() => setUserInfo({ ...userInfo, gender: item?.id })}
                        />
                    })}
                </div>
                {user?.user?.hasAvatar === 1 && (
                    <div className="flex flex-col items-center text-center pt-4">
                        <p className='text-tiny text-captionDark font-bold leading-7 mb-8'>در صورتی که قصد تغییر تصویر پروفایل خود را دارید،
                            باید ابتدا تصویر پروفایل خود را حذف کنید.</p>
                        <Button
                            active={true}
                            title="حذف تصویر پروفایل"
                            width={true}
                            onClick={() => deleteAvatarHandler()}
                            disabled={loadingDel}
                            loading={loadingDel}
                        />
                    </div>
                )}
                <div className="flex flex-col items-center pt-2">
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        ref={inputRef}
                        className="hidden"
                        onChange={selectFileHandler}
                    />
                    <div className="w-56 h-48 border rounded mb-2 flex flex-col items-center justify-center overflow-hidden">
                        {userInfo?.hasAvatar === 1 ? (
                            <img src={baseUrl + '/' + userInfo?.avatar} alt="" className='w-full h-full object-cover' />
                        ) : (
                            <>
                                {selectedPath !== '' ? (
                                    <img src={selectedPath} alt="" className='w-full h-full object-cover' />
                                ) : (
                                    <div className='w-full h-full flex flex-col justify-center items-center cursor-pointer'
                                        onClick={() => inputRef.current.click()}>
                                        <LoadSvgIcon name="dragDrop" size={30} weight={1.5} />
                                        <p className='text-captionDark font-bold'>آپلود تصویر</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    {userInfo?.hasAvatar === 1 ? (
                        null
                    ) : (
                        <>
                            {selectedPath !== '' && (
                                <div className="bg-primary rounded p-2 cursor-pointer"
                                    onClick={() => {
                                        setSelectedFile(null)
                                        setSelectedPath('')
                                    }}
                                >
                                    <LoadSvgIcon name="trash" color='#ffffff' weight={1.5} />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-3 pt-16">
                <div className="col-start-2">
                    <Button
                        active={true}
                        title="ویرایش اطلاعات"
                        onClick={() => editUserInfoHandler()}
                        disabled={loadingEdit}
                        loading={loadingEdit}
                    />
                </div>
            </div>
        </div >
    )
}

export default UserEdit