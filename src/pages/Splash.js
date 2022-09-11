import React from 'react'
import LoadSvgIcon from '../utils/LoadSvgIcon'

const Splash = () => {
    return (
        <div className='h-full bg-primary flex flex-col items-center justify-center'>
            <p className='text-sm text-white font-bold mb-2'>در حال راه اندازی ...</p>
            <LoadSvgIcon name="loading" fill='#ffffff' color="#ffffff" />
        </div>
    )
}

export default Splash