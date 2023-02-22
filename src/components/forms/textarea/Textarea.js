import React, { useState } from 'react'
import { useEffect } from 'react'
// import useValidation from '../../../hooks/useValidation'

const Textarea = ({
    iconName = "",
    placeholder = "",
    rule = "",
    value = "",
    onChange,
    disabled = false,
    attributes = {},
    theme = 'light'
}) => {

    // const { validate } = useValidation()

    const [focusInput, setFocusInput] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [validInput, setValidInput] = useState(null);

    useEffect(() => {
        setInputValue(value)
    }, [value])

    useEffect(() => {
        inputValue === '' && setValidInput(null)
    }, [inputValue])


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
            <div className={`flex border rounded-md pt-2 relative
            ${disabled && 'opacity-60 bg-gray-50'}
            ${validInput ? 'bg-gray-100' : ''}
            ${theme === 'light' ? 'border-captionLight bg-white' : 'border-grayLight bg-grayDark'}`}>
                <div className={`flex-grow h-full relative`}>
                    <textarea
                        value={inputValue}
                        onChange={e => onChangeHandler(e.target.value)}
                        onBlur={validHandler}
                        onFocus={() => setFocusInput(true)}
                        className={`w-full h-full outline-none resize-none text-xxs text-body font-bold bg-transparent componentinput px-3
                        ${theme === 'light' ? 'text-caption' : 'text-grayLight'}`}
                        disabled={disabled}
                        {...attributes}
                    ></textarea>
                </div>
                <p className={`placeholder absolute right-3 text-xs  pointer-events-none transition-all duration-300
                    ${theme === 'light' ? 'text-captionLight bg-white' : 'text-grayLight bg-grayDark'}
                    ${(focusInput || inputValue !== '') ? '-top-2 text-[11px] px-2' : 'top-2'}`}>
                    {placeholder}
                </p>
            </div>
        </>
    )
}

export default Textarea