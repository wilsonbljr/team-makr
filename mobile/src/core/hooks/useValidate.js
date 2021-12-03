import { useState } from 'react';

const useValidate = () => {
    const [errors, setErrors] = useState({
        email: { error: false, errorText: '' },
        password: { error: false, errorText: '' },
        name: { error: false, errorText: '' },
        pronouns: { error: false, errorText: '' },
        phone_number: { error: false, errorText: '' },
        skillId: { error: false, errorText: '' }
    });

    const handleValidation = (values) => {
        if (values.email) {
            //eslint-disable-next-line
            const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            const validate = re.test(values.email);
            validate ?
                setErrors({ ...errors, email: { error: false, errorText: '' } })
                : setErrors({ ...errors, email: { error: true, errorText: 'Please enter a valid email' } })

        }
        if (values.password) {
            //eslint-disable-next-line
            const re = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/;
            const validate = re.test(values.password);
            validate ?
                setErrors({ ...errors, password: { error: false, errorText: '' } })
                : setErrors({ ...errors, password: { error: true, errorText: 'Password must be between 8 and 20 characters with at least one number' } })
        }

        if (values.pronouns) {
            //eslint-disable-next-line
            const re = /^(([A-Za-z]{1,4})(-|\/)([A-Za-z]{1,4}))$/;
            const validate = re.test(values.pronouns);
            validate ?
                setErrors({ ...errors, pronouns: { error: false, errorText: '' } })
                : setErrors({ ...errors, pronouns: { error: true, errorText: 'Max 9 characters and at least one /' } })
        }

        if (values.phone_number) {
            //eslint-disable-next-line
            const re = /^[0-9]{11}$/;
            const validate = re.test(values.phone_number);
            validate ?
                setErrors({ ...errors, phone_number: { error: false, errorText: '' } })
                : setErrors({ ...errors, phone_number: { error: true, errorText: 'Phone must have 11 digits, (DD) 12345-6789' } })
        }

        if (values.name) {
            //eslint-disable-next-line
            const re = /^([A-Za-z]{2,15})\s([A-Za-z\s]{0,30})$/;
            const validate = re.test(values.name);
            validate ?
                setErrors({ ...errors, name: { error: false, errorText: '' } })
                : setErrors({ ...errors, name: { error: true, errorText: 'First and Last name separated by an empty space, 45 characters maximum' } })
        }

        if (values.skillId) {
            //eslint-disable-next-line
            const re = /^([1-9]\d{0,10})$/;
            const validate = re.test(values.skillId);
            validate ?
                setErrors({ ...errors, skillId: { error: false, errorText: '' } })
                : setErrors({ ...errors, skillId: { error: true, errorText: 'Must be positive integer' } })
        }
    }

    return { errors, handleValidation };
}

export default useValidate;