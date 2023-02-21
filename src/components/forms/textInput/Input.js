import { useEffect, useState } from 'react';
import useValidation from '../../../hooks/useValidation';
import LoadSvgIcon from '../../../utils/LoadSvgIcon'

const Input = ({
    iconName = "",
    type = 'text',
    placeholder = "",
    rule = "",
    value = "",
    onChange,
    disabled = false,
    attributes = {},
    haveError,
    theme = 'light'
}) => {

    // const { validate } = useValidation()

    const [focusInput, setFocusInput] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [validInput, setValidInput] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setInputValue(value)
    }, [value])

    useEffect(() => {
        inputValue === '' && setValidInput(null)
    }, [inputValue])

    useEffect(() => {
        if (haveError === true) {
            setValidInput(false)
        } else if (haveError === false) {
            setValidInput(true)
        }
    }, [haveError])


    const onChangeHandler = (val) => {
        onChange({
            target: {
                value: val
            }
        })
    }

    const validHandler = () => {
        setFocusInput(false)
        // const valid = validate({ rule: rule, value: inputValue })
        // setValidInput(valid.isValid)
    }

    return (
        <>
            <div className={`inputBox relative flex items-center border h-11 rounded-md 
                ${disabled && 'opacity-60 bg-gray-50'}
                ${validInput ? 'bg-gray-100' : ''}
                ${validInput === false ? 'border-danger' : ''}
                ${theme === 'light' ? 'border-light bg-white' : 'border-grayLight bg-grayDark'}`}
            >
                <div className='flex-grow h-full relative'>
                    <input
                        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                        value={inputValue}
                        onChange={e => onChangeHandler(e.target.value)}
                        onBlur={validHandler}
                        onFocus={() => setFocusInput(true)}
                        className={`w-full h-full outline-none bg-transparent text-xs font-bold px-3
                        ${theme === 'light' ? 'text-caption' : 'text-grayLight'}`}
                        disabled={disabled}
                        {...attributes}
                    />
                </div>
                <p className={`placeholder absolute right-3 text-xs  pointer-events-none transition-all duration-300
                    ${theme === 'light' ? 'text-captionLight bg-white' : 'text-grayLight bg-grayDark'}
                    ${(focusInput || inputValue !== '') ? '-top-2 text-[11px] px-2' : 'top-1/2 -translate-y-1/2'}`}>
                    {placeholder}
                </p>
                {type === 'password' && (
                    <div className="w-10 min-w-[40px] h-full flex items-center justify-center">
                        {showPassword ? (
                            <button onClick={() => setShowPassword(false)}>
                                <LoadSvgIcon
                                    name="passwordShow"
                                    size={18}
                                    weight={1.5}
                                    color="var(--color-captionLight)"
                                />
                            </button>
                        ) : (
                            <button onClick={() => setShowPassword(true)}>
                                <LoadSvgIcon
                                    name="passwordHide"
                                    size={18}
                                    weight={1.5}
                                    color="var(--color-captionLight)"
                                />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Input;

