import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ConfirmModal from '../../components/modal/ConfirmModal';
import { avatar } from '../../utils/AvatarSet';
import InformationUser from './InformationUser';
import EditUser from './EditUser';

const Avatar = () => {

    const { user } = useSelector(store => store.user);

    const [panels, setPanels] = useState({
        userInfo: false,
        userEdit: false
    });

    return (
        <>
            <div className="w-16 h-16 rounded-full mx-auto overflow-hidden cursor-pointer">
                <img
                    src={avatar(user)}
                    alt="avatar"
                    className="w-full h-full object-cover"
                    onClick={() => setPanels({ ...panels, userInfo: true })}
                />
            </div>

            <ConfirmModal
                options={{
                    show: panels.userInfo,
                    position: 'left'
                    // setShow: () => setResultModal(false),
                }}
            >
                <InformationUser
                    closeInfo={() => setPanels({ userInfo: false, userEdit: false })}
                    openEdit={() => setPanels({ userInfo: true, userEdit: true })}
                />
            </ConfirmModal>
            <ConfirmModal
                options={{
                    show: panels.userEdit,
                    position: 'left'
                    // setShow: () => setResultModal(false),
                }}
            >
                <EditUser closeEdit={() => setPanels({ userInfo: true, userEdit: false })} />
            </ConfirmModal>
        </>
    )
}

export default Avatar