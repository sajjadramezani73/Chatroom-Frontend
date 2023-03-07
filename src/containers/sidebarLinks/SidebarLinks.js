import React, { useState } from 'react'
import SidebarLinkItem from './SidebarLinkItem';

const SidebarLinks = ({ changeLink }) => {

    const [activeLink, setActiveLink] = useState('pvs');
    const [links] = useState([
        {
            title: 'مخاطبین',
            icon: 'user',
            href: 'pvs'
        },
        {
            title: 'گروه ها',
            icon: 'group',
            href: 'groups'
        },
        {
            title: 'کاربران',
            icon: 'commentFill',
            href: 'contacts'
        },
    ]);

    return (
        links.map(link => {
            const active = link.href === activeLink
            return <SidebarLinkItem
                key={link.href}
                item={link}
                active={active}
                cliked={() => {
                    setActiveLink(link.href)
                    changeLink(link.href)
                }}
            />
        })
    )
}

export default SidebarLinks