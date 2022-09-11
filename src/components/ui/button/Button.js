import React from 'react'

const Button = ({ title, active, width = false, onClick }) => {
    return (
        <button className={`border-2 font-bold text-sm rounded-lg p-2 border-primary
        ${active ? 'bg-primary text-white' : ' bg-primaryLight text-primary'}
        ${width ? 'w-[165px]' : 'w-full'}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button