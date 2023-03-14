import { NavLink } from 'react-router-dom'
import { avatar } from '../../utils/AvatarSet'

const UserItem = ({ item }) => {

    return (
        <NavLink to={`privateChat/${item?._id}`}
            style={{ padding: '8px' }}
            className={({ isActive }) =>
                isActive ? "bg-primary rounded-xl" : ""
            }>
            <div className='flex items-center'>
                <img src={avatar(item)} alt="avatar" className='w-[50px] h-[50px] rounded-full object-cover' />
                <p className='ml-4 text-grayLight'>{item?.username}</p>
            </div>
        </NavLink >
    )
}

export default UserItem