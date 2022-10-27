/* eslint-disable no-unused-expressions */
import LoadSvgIcon from '../../utils/LoadSvgIcon'
import manAvatar from '../../assets/images/man.svg'
import womanAvatar from '../../assets/images/woman.svg'
import Button from '../ui/button/Button'

const UserInfo = ({ user }) => {

    const avatar = (user) => {

        if (user?.avatar !== '') {
            return user?.avatar
        } else {
            return user?.gender === "male" ? manAvatar : womanAvatar
        }

    }
    return (
        <div className="flex items-center justify-between pb-4 border-b-2">
            <div className="flex items-center">
                <img src={avatar(user)} className="w-14 h-14 object-cover" alt="avatar" />
                <p className='text-base font-bold text-captionDark ml-2'>{user?.username}</p>
            </div>
            <div className='p-1 cursor-pointer'>
                <LoadSvgIcon name="edit" weight={2} />
            </div>
        </div>
    )
}

export default UserInfo