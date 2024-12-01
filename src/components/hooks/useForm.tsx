import React, { useState } from "react";


type SubmitHandler<T> = (values: T) => void;

export default function useForm<T>(initialValues: T, submitHandler: SubmitHandler<T>) {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitHandler(values);
    }

    return {
        values,
        handleChange,
        handleSubmit
    }
}