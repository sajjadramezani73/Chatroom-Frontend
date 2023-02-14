
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

    const validate = ({ rule, value }) => {

        switch (rule) {
            case 'mobile':
                if (value.isMobile()) {
                    return {
                        isValid: true
                    }
                } else {
                    return {
                        isValid: false
                    }
                }
            case 'required':
                if (value.trim().length > 0) {
                    return {
                        isValid: true
                    }
                } else {
                    return {
                        isValid: null
                    }
                }
            default:
                return {
                    isValid: null
                }

        }
    }

    return { validate }
};

export default useValidation;
