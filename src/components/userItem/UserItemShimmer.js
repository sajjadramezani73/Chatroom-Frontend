
const UserItemShimmer = ({ item }) => {

    return (
        <div className='flex items-center p-2 rounded-xl bg-gray-50'>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-200 animate-pulse'></div>
            <p className='ml-4 h-5 w-28 bg-gray-200 rounded animate-pulse'></p>
        </div>
    )
}

export default UserItemShimmer