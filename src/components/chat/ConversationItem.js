import { baseUrl } from '../../constant'
import manAvatar from '../../assets/images/man.svg'
import womanAvatar from '../../assets/images/woman.svg'

const ConversationItem = ({ item }) => {

    const avatar = (user) => {
        if (user?.avatar !== '') {
            return baseUrl + '/' + user?.avatar
        } else {
            return user?.gender === "male" ? manAvatar : womanAvatar
        }
    }

    return (
        <div className='border-b border-captionLight py-3 px-4 flex items-center justify-between cursor-pointer'>
            <div className="w-[40px] h-[40px] min-w-[40px] rounded-full overflow-hidden">
                <img
                    src={avatar(item)}
                    alt="avatar chat"
                    className='w-full h-full rounded-full object-cover'
                />
            </div>
            <div className='pr-1.5 pl-2.5 grow overflow-hidden'>
                <div className="flex justify-between items-center">
                    <p className='text-sm font-medium text-body'>
                        {item?.username}
                    </p>
                    {/* <p className='text-xxs font-normal text-captionDark pt-1 ltr'>
                        {changeTime(splitDate(lastMessage.created_at)[1])}
                    </p> */}
                </div>
                {/* <div className="flex justify-between items-center pt-1.5">
                    <p className='text-xxs font-normal text-captionDark truncate'>{lastMessage?.message}</p>
                    <div className='w-8 min-w-[32px] flex justify-end items-center'>
                        {unreadMessage == 0 ? (
                            <span>
                                <LoadSvgIcon name="check" color="var(--color-captionDark)" weight={2} size="16" />
                            </span>
                        ) : (
                            <span className='w-[18px] h-[18px] rounded-full bg-captionDark flex justify-center items-center pt-px'>
                                <p className='text-[8px] font-medium text-captionLight'>{unreadMessage}</p>
                            </span>
                        )}
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ConversationItem