
import { useEffect, useState } from 'react';
import LoadSvgIcon from '../../../utils/LoadSvgIcon'

const Input = ({
    iconName = "",
    type = 'text',
    placeholder = "",
    rule = "",
    value = "",
    onChange,
    errorMessage = null,
    attributes = {},
    haveError = function () { },

}) => {

    const [focused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(null)
    const clearInputValue = () => onChangeHandler('')

    useEffect(() => {
        setInputValue(value)
    }, [value])

    const onChangeHandler = (val) => {
        onChange({
            target: {
                value: val
            }
        })
    }

    useEffect(() => {
        if (value !== '' && value?.length >= 0) {
            if (error) {
                haveError(true)
            } else {
                haveError(false)
            }
        } else {
            haveError(true)
        }
    }, [error, value])

    return (
        <div className="py-2">
            <div className={`flex h-11 rounded-xl border items-center
            ${error != null ? 'border-danger' : focused ? 'border-gray-500' : (!!inputValue ? 'border-body' : '')}`}>
                <div className='w-10 h-full flex justify-center items-center'>
                    <LoadSvgIcon name={iconName} size="16" />
                </div>
                <div className='grow h-full relative text-right'>
                    <input
                        type={type}
                        value={inputValue}
                        onChange={val => onChangeHandler(val.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className="w-full h-full outline-none bg-transparent text-xxs text-body font-bold componentinput"
                        placeholder={placeholder}
                        {...attributes} />
                </div>
                {value != '' ?
                    <span className="px-2" onClick={clearInputValue}>
                        <LoadSvgIcon name="close-circle" size={16} />
                    </span>
                    : null}
            </div>
            {error != null ?
                <div className="w-full flex mt-2">
                    <span className="px-2">
                        <LoadSvgIcon name="info" color="var(--color-danger)" size={16} />
                    </span>
                    <span className="text-danger text-[10px]">{error}</span>
                </div>
                : null
            }
            <style>
                {`
                    .componentinput::placeholder {
                        color:#c1c1c1;
                        font-size:12px;
                        font-weight:500;
                    }
                `}
            </style>
        </div>
    );
};

export default Input;
