import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Textarea from '../../components/forms/textarea/Textarea';
import Input from '../../components/forms/textInput/Input';
import { avatar } from '../../utils/AvatarSet'
import LoadSvgIcon from '../../utils/LoadSvgIcon'
import Button from '../../components/ui/button/Button'
import { updateUser } from '../../services/queries';
import { toast } from 'react-toastify';
import { addUser } from '../../store/userSlice';

const EditUser = ({ closeEdit }) => {

    const inputRef = useRef()
    const { user } = useSelector(store => store.user);
    const dispatch = useDispatch()

    const [userInfo, setUserInfo] = useState(null);
    const [showBtnSave, setShowBtnSave] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedPath, setSelectedPath] = useState('');
    const [loading, setLoading] = useState(false);

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

    useEffect(() => {
        setUserInfo(user)
    }, [user]);

    useEffect(() => {
        (
            userInfo?.username !== user?.username ||
            userInfo?.firstname !== user?.firstname ||
            userInfo?.lastname !== user?.lastname ||
            userInfo?.bio !== user?.bio ||
            selectedFile !== null
        ) ? setShowBtnSave(true) : setShowBtnSave(false)
    }, [userInfo, selectedFile]);

    //edit information with send id user and other info
    const editUserInfoHandler = () => {
        setLoading(true)

        const formData = new FormData()
        formData.append("id", userInfo?._id)
        formData.append("username", userInfo?.username)
        formData.append("firstname", userInfo?.firstname)
        formData.append("lastname", userInfo?.lastname)
        formData.append("bio", userInfo?.bio)
        if (selectedFile) {
            formData.append("avatar", selectedFile)
        }

        updateUser(formData)
            .then(res => {
                toast.success(res?.message)
                dispatch(addUser(res.user))
                setLoading(false)
                setTimeout(() => {
                    closeEdit()
                }, 1000);
            }).catch(err => {
                console.log(err)
                toast.error(err?.response?.data?.errorMessage ?? 'خطا در برقراری ارتباط. مجددا تلاش کنید')
                setLoading(false)
            })
    }

    return (
        <div className="bg-white h-full">
            <div className="flex justify-between items-center px-4 py-4">
                <div className="flex items-center">
                    <span className='cursor-pointer' onClick={closeEdit}>
                        <LoadSvgIcon name="backArrow" color="var(--color-caption)" weight={1.5} size={18} />
                    </span>
                    <p className='text-caption text-sm ml-4'>ویرایش اطلاعات</p>
                </div>
            </div>
            <div className="flex flex-col items-center px-4">
                <div className="w-[120px] min-w-[120px] h-[120px] rounded-full overflow-hidden relative">
                    <img src={selectedPath ? selectedPath : avatar(userInfo)} alt="" className="w-full h-full object-cover" />
                    <span
                        className='absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center cursor-pointer'
                        onClick={() => inputRef.current.click()}>
                        <LoadSvgIcon name="cameraPlus" size={50} weight={1} color="#ffffff" />
                    </span>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        ref={inputRef}
                        className="hidden"
                        onChange={selectFileHandler}
                    />
                </div>
                <div className="mt-8 w-full">
                    <Input
                        type='text'
                        placeholder="نام کاربری"
                        value={userInfo?.username}
                        onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
                        rule="required"
                    />
                </div>
                <div className="mt-8 w-full">
                    <Input
                        type='text'
                        placeholder="نام"
                        value={userInfo?.firstname}
                        onChange={e => setUserInfo({ ...userInfo, firstname: e.target.value })}
                        rule="required"
                    />
                </div>
                <div className="mt-8 w-full">
                    <Input
                        type='text'
                        placeholder="نام خانوادگی"
                        value={userInfo?.lastname}
                        onChange={e => setUserInfo({ ...userInfo, lastname: e.target.value })}
                        rule="required"
                    />
                </div>
                <div className="mt-8 w-full">
                    <Textarea
                        value={userInfo?.bio}
                        placeholder="درباره من"
                        rule="required"
                        onChange={e => setUserInfo({ ...userInfo, bio: e.target.value })}
                        attributes={{ rows: 8 }}
                    />
                </div>
                {showBtnSave && (
                    <div className="mt-8 w-full">
                        <Button
                            active={true}
                            title="ذخیره اطلاعات"
                            onClick={editUserInfoHandler}
                            loading={loading}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default EditUser