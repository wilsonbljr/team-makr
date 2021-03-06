import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import useValidate from '../../core/hooks/useValidate';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { registerUser } from '../../core/services/user.service';
import { HelperText, TextInput } from 'react-native-paper';
import DefaultButton from './DefaultButton';


const RegisterForm = () => {
    const { errors, handleValidation } = useValidate();
    const navigation = useNavigation();
    const { showSnack } = useSnackbar();
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function submitRegister() {
        handleValidation({ name, pronouns, email, password, phone_number: phone });
        if (!errors.password.error &&
            !errors.pronouns.error &&
            !errors.phone_number.error &&
            !errors.name.error &&
            name !== '' &&
            email !== '' &&
            password !== '') {
            registerUser(name, pronouns, phone, email, password).then((res) => {
                if (res.status === 201) {
                    showSnack(false, 'Register successful!');
                    setTimeout(() => { navigation.navigate('Login') }, 3000);
                } else {
                    showSnack(true, 'Internal Server Error.');
                }
            });
        }
    };

    return (
        <>
            <TextInput
                label='Name*'
                mode='outlined'
                value={name}
                textContentType={'name'}
                onBlur={() => { handleValidation({ name }) }}
                error={errors.name.error}
                onChangeText={name => setName(name)}
            />
            <HelperText type='error' padding='none' visible={errors.name.error}>{errors.name.errorText}</HelperText>
            <TextInput
                label='Pronouns'
                mode='outlined'
                value={pronouns}
                onBlur={() => { handleValidation({ pronouns }) }}
                error={errors.pronouns.error}
                onChangeText={pronouns => setPronouns(pronouns)}
            />
            <HelperText type='error' padding='none' visible={errors.pronouns.error}>{errors.pronouns.errorText}</HelperText>
            <TextInput
                label='Phone Number'
                mode='outlined'
                value={phone}
                textContentType={'telephoneNumber'}
                onBlur={() => { handleValidation({ phone_number: phone }) }}
                error={errors.phone_number.error}
                onChangeText={phone => setPhone(phone)}
            />
            <HelperText type='error' padding='none' visible={errors.phone_number.error}>{errors.phone_number.errorText}</HelperText>
            <TextInput
                label='E-mail*'
                mode='outlined'
                value={email}
                textContentType={'emailAddress'}
                onBlur={() => { handleValidation({ email }) }}
                error={errors.email.error}
                onChangeText={email => setEmail(email)}
            />
            <HelperText type='error' padding='none' visible={errors.email.error}>{errors.email.errorText}</HelperText>
            <TextInput
                label='Password*'
                mode='outlined'
                value={password}
                textContentType={'password'}
                secureTextEntry={true}
                onBlur={() => { handleValidation({ password }) }}
                error={errors.password.error}
                onChangeText={password => setPassword(password)}
                autoCapitalize='none'
            />
            <HelperText type='error' padding='none' visible={errors.password.error}>{errors.password.errorText}</HelperText>
            <DefaultButton buttonLabel='Register' onPress={() => submitRegister()} />
        </>
    )
};

export default RegisterForm;