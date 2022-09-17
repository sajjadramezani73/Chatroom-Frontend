import React from 'react'
import LoadSvgIcon from '../../../utils/LoadSvgIcon'

const Button = ({ title, active, width = false, onClick, loading }) => {
    return (
        <button
            className={`border-2 font-bold text-sm rounded-lg px-2 h-11 border-primary flex items-center justify-center
            ${active ? 'bg-primary text-white' : ' bg-primaryLight text-primary'}
            ${width ? 'w-[165px]' : 'w-full'}`}
            disabled={loading}
            onClick={onClick}
        >
            {loading ? <LoadSvgIcon name="loading" fill='#ffffff' color="#ffffff" /> : title}
        </button>
    )
}

export default Button