import React from 'react'
import { useSelector } from 'react-redux';
import LoadSvgIcon from '../../utils/LoadSvgIcon'
import { avatar } from '../../utils/AvatarSet'
import Slider from '../../components/slider/Slider';

const InformationUser = ({ closeInfo, openEdit }) => {

    const { user } = useSelector(store => store.user);

    return (
        <div className="bg-grayDark h-full">
            <div className="flex justify-between items-center px-4 py-4">
                <div className="flex items-center">
                    <span className='cursor-pointer' onClick={closeInfo}>
                        <LoadSvgIcon name="backArrow" color="var(--color-grayLight)" weight={1.5} size={18} />
                    </span>
                    <p className='text-grayLight text-sm ml-4'>اطلاعات</p>
                </div>
                <span className='cursor-pointer' onClick={openEdit}>
                    <LoadSvgIcon name="edit" color="var(--color-grayLight)" weight={1.5} />
                </span>
            </div>
            <div className="flex justify-center">
                {user?.avatar.length > 0 ? (
                    <div className="relative w-full">
                        <Slider items={user?.avatar} />
                        <div className="absolute right-2.5 bottom-2 z-10">
                            <p className='text-grayLight text-md'>{user?.firstname + ' ' + user?.lastname}</p>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col items-center gap-y-4'>
                        <div className="w-[120px] min-w-[120px] h-[120px] rounded-full overflow-hidden">
                            <img src={avatar(user)} alt="" className="w-full h-full" />
                        </div>
                        <p className='text-grayLight text-tiny'>{user?.firstname + ' ' + user?.lastname}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InformationUser