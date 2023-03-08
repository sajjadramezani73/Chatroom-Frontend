import React from 'react'
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const SidebarLinkItem = ({ item, cliked, active }) => {
    return (
        <div
            className={`flex justify-center py-6 hover:bg-grayDark border-l-4 border-transparent hover:border-greenCu duration-300 cursor-pointer
            ${active ? 'bg-grayDark border-greenCu' : ''}`}
            onClick={cliked}
        >
            <span>
                <LoadSvgIcon name={item.icon} fill="var(--color-light)" color="var(--color-light)" />
            </span>
        </div>
    )
}

export default SidebarLinkItem