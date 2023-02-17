import React from 'react'
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const EditUser = ({ closeEdit }) => {
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
        </div>
    )
}

export default EditUser