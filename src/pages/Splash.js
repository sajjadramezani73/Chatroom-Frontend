import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIndex } from '../services/queries'
import { addUser } from '../store/userSlice'
import LoadSvgIcon from '../utils/LoadSvgIcon'

const Splash = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getIndexHandler = () => {
        getIndex('/api/application/index')
            .then(res => {
                res.user !== null ? dispatch(addUser(res.user)) : dispatch(addUser(null))
                res.userValid === true ? navigate('/home') : navigate('/signup-login')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        setTimeout(() => {
            getIndexHandler()
        }, 3000);
    }, [])

    return (
        <div className='h-full bg-primary flex flex-col items-center justify-center'>
            <p className='text-sm text-white font-bold mb-2'>در حال راه اندازی ...</p>
            <LoadSvgIcon name="loading" fill='#ffffff' color="#ffffff" />
        </div>
    )
}

export default Splash