import LoadIconSvg from '../../../utils/LoadSvgIcon'

const Checkbox = ({ title, checked, onClick }) => {
    return (
        <div className='flex items-center cursor-pointer ml-4' onClick={onClick}>
            <span className={`flex justify-center items-center w-4 h-4 border-2 rounded 
            ${checked ? 'bg-primary border-primary' : 'border-caption'}`}>
                {checked ? <LoadIconSvg name='check' color='#fff' weight={2} size={15} /> : null}
            </span>
            <p className={`mr-2 text-sm ${checked ? 'text-primary' : 'text-gray-500'}`}>{title}</p>
        </div>
    )
}

export default Checkbox