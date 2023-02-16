import React from 'react'
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const SidebarLinkItem = ({ item }) => {
    return (
        <div className="flex justify-center py-6 hover:bg-grayDark border-l-4 border-transparent hover:border-greenCu duration-300 cursor-pointer">
            <span>
                <LoadSvgIcon name={item.icon} fill="var(--color-grayLight)" color="var(--color-grayLight)" />
            </span>
            {/* <p className='text-tiny font-bold text-titr mr-1 pt-1'>{item.title}</p> */}
        </div>
    )
}

export default SidebarLinkItem