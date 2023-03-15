import React from 'react'
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const SidebarLinkItem = ({ item, cliked, active }) => {
    return (
        <div
            className={`flex justify-center py-6 hover:bg-light/50 border-l-4 border-transparent hover:border-primary duration-300 cursor-pointer
            ${active ? 'bg-light/50 border-primary' : ''}`}
            onClick={cliked}
        >
            <span>
                <LoadSvgIcon name={item.icon} fill="var(--color-captionLight)" color="var(--color-captionLight)" />
            </span>
        </div>
    )
}

export default SidebarLinkItem