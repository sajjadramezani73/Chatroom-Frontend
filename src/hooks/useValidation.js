
import { useState } from 'react';

const useValidation = () => {

    const [error, setError] = useState(null)
    String.prototype.justNumber = function () {
        return this.trim().replace(/[^0-9.]/g, "")
    }

    String.prototype.isMobile = function () {
        return (/^09\d{9}$/g).test(this.trim())
    }

    Number.prototype.numberFormat = function () {
        return this.toLocaleString().split(/\s/).join(',')
    }
    String.prototype.numberFormat = function () {
        return Number(this).toLocaleString().split(/\s/).join(',')
    }

    const validate = ({ rule, value, errorMessage }) => {

        switch (rule) {
            case 'mobile':
                if (value.isMobile()) {
                    return {
                        message: null
                    }
                } else {
                    return {
                        message: errorMessage
                    }
                }
            case 'required':
                if (value.trim().length >= 0) {
                    return {
                        message: null
                    }
                } else {
                    return {
                        message: errorMessage
                    }
                }
            default:
                return {
                    message: 'ولیدیشن یافت نشد'
                }

        }
    }

    return { validate }
};

export default useValidation;
