import React from 'react'
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const InformationUser = ({ closeInfo, openEdit }) => {
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
        </div>
    )
}

export default InformationUser