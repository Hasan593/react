import { useState } from "react";

export const useForm = (inishialValue) => {
    const [ values, setValues ] = useState(inishialValue);

    const handleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    };

    const resetForm = () => {
        setValues(inishialValue);
    };

    return {values, handleChange, resetForm};
};