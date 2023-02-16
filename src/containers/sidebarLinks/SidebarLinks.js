import React, { useState } from 'react'
import SidebarLinkItem from './SidebarLinkItem';

const SidebarLinks = () => {
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
            return <SidebarLinkItem item={link} key={link.href} />
        })
    )
}

export default SidebarLinks