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
    haveError
}) => {

    const { validate } = useValidation()

    const [focusInput, setFocusInput] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [validInput, setValidInput] = useState(null);

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
        const valid = validate({ rule: rule, value: inputValue })
        setValidInput(valid.isValid)
    }

    return (
        <>
            <div className={`inputBox relative flex items-center border border-light h-12 rounded-md 
                ${disabled && 'opacity-60 bg-gray-50'}
                ${validInput ? 'bg-gray-100' : 'bg-white'}
                ${validInput === false ? 'border-danger' : ''}`}
            >
                <div className='flex-grow h-full relative'>
                    <input
                        type={type}
                        value={inputValue}
                        onChange={e => onChangeHandler(e.target.value)}
                        onBlur={validHandler}
                        onFocus={() => setFocusInput(true)}
                        className="w-full h-full outline-none bg-transparent text-xs text-caption font-bold px-4"
                        disabled={disabled}
                        {...attributes}
                    />
                </div>
                <p className={`placeholder absolute right-3 text-xs text-captionLight px-2 pointer-events-none transition-all duration-300
                    ${(focusInput || inputValue !== '') ? '-top-2 bg-white text-[11px]' : 'top-1/2 -translate-y-1/2'}`}>
                    {placeholder}
                </p>
                {validInput === true && (
                    <div className="w-10 min-w-[40px] h-full flex items-center justify-center">
                        <span className=''>
                            <LoadSvgIcon name="check" size={18} weight={1.5} color="var(--color-primary)" />
                        </span>
                    </div>
                )}
                {validInput === false && (
                    <div className="w-10 min-w-[40px] h-full flex items-center justify-center">
                        <span className=''>
                            <LoadSvgIcon name="close-circle" size={18} weight={1.5} color="var(--color-danger)" />
                        </span>
                    </div>
                )}
            </div>
        </>
    );
};

export default Input;

