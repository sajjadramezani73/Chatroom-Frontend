import Input from '../components/forms/textInput/Input'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/userSlice'
import { useState } from 'react';
import Checkbox from '../components/forms/checkbox/Checkbox';
import Button from '../components/ui/button/Button';
import LoadSvgIcon from '../utils/LoadSvgIcon';

const UserEdit = () => {

    const dispatch = useDispatch()
    const inputRef = useRef()

    const user = useSelector(store => store.user);
    console.log('user', user);

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedPath, setSelectedPath] = useState("");
    // const [error, setError] = useState("");
    const [genders] = useState([
        { id: 'male', title: 'مرد' },
        { id: 'famale', title: 'زن' }
    ]);

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
                        value={user?.user?.username}
                        onChange={e => dispatch(addUser({ ...user.user, username: e.target.value }))}
                        rule="required"
                        errorMessage="نام کاربری اجباری می باشد"
                    // haveError={e => setError({ ...error, username: e })}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    {genders.map(item => {
                        const checkedGender = item.id === user.user.gender ? true : false
                        return <Checkbox
                            key={item.id}
                            title={item.title}
                            checked={checkedGender}
                            onClick={() => {
                                dispatch(addUser({ ...user.user, gender: item.id }))
                            }}
                        />
                    })}
                </div>

                <div className="flex flex-col items-center pt-2">
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        ref={inputRef}
                        className="hidden"
                        onChange={selectFileHandler}
                    />
                    <div className="w-56 h-48 border rounded mb-2 flex flex-col items-center justify-center overflow-hidden">
                        {selectedPath !== '' ? (
                            <img src={selectedPath} alt="" className='w-full h-full object-cover' />
                        ) : (
                            <>
                                <LoadSvgIcon name="dragDrop" size={30} weight={1.5} />
                                <p className='text-captionDark font-bold'>کشیدن و رها کردن</p>
                            </>
                        )}
                    </div>
                    {selectedPath !== '' ? (
                        <div className="bg-primary rounded p-2 cursor-pointer"
                            onClick={() => {
                                setSelectedFile(null)
                                setSelectedPath('')
                            }}
                        >
                            <LoadSvgIcon name="trash" color='#ffffff' weight={1.5} />
                        </div>
                    ) : (
                        <Button
                            active={true}
                            title="آپلود تصویر"
                            width={true}
                            onClick={() => inputRef.current.click()}
                        // disabled={disabled}
                        // loading={loading}
                        />
                    )}
                </div>

            </div>
        </div>
    )
}

export default UserEdit