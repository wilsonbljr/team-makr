import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useUserInfo } from '../../core/hooks/useUserInfo';
import useValidate from '../../core/hooks/useValidate';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { updateUser } from '../../core/services/user.service';

import { StyleSheet } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import DefaultButtonOutlined from './DefaultButtonOutlined';
import DefaultModal from './DefaultModal';
import { backgroundColour, primaryColour } from '../styles/styles';


const HomeEditProfileModal = ({ modal, setModal }) => {
    const { user, token } = useAuth();
    const { errors, handleValidation } = useValidate();
    const { showSnack } = useSnackbar();
    const { firstName, lastName, email, setCurrentUserInfo } = useUserInfo();
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const submitEditProfile = () => {
        handleValidation({ password, pronouns, phone_number: phone });
        if (!errors.password.error &&
            !errors.pronouns.error &&
            !errors.phone_number.error &&
            (password !== '' || phone !== '' || pronouns !== '')) {
            updateUser(user, pronouns, phone, password, token).then(async res => {
                if (res.status === 200) {
                    await setCurrentUserInfo(user, token);
                    showSnack(false, 'Profile updated!');
                    setModal(false);
                }
            }).catch(err => {
                showSnack(true, 'Internal server Error');
            });
        }
    };

    return (
        <DefaultModal setModal={setModal} modal={modal} title='Edit your profile'>
            <TextInput
                style={[styles.input, styles.inputMargin]}
                label='Name'
                mode='outlined'
                editable={false}
                outlineColor={primaryColour}
                value={firstName + ' ' + lastName}
                textContentType={'name'}
            />
            <TextInput
                style={styles.input}
                label='Pronouns'
                mode='outlined'
                value={pronouns}
                onBlur={() => { handleValidation({ pronouns }) }}
                error={errors.pronouns.error}
                onChangeText={pronouns => setPronouns(pronouns)}
            />
            <HelperText type='error' padding='none' visible={errors.pronouns.error}>{errors.pronouns.errorText}</HelperText>
            <TextInput
                style={styles.input}
                label='Phone Number'
                mode='outlined'
                value={phone}
                onBlur={() => { handleValidation({ phone_number: phone }) }}
                error={errors.phone_number.error}
                textContentType={'telephoneNumber'}
                onChangeText={phone => setPhone(phone)}
            />
            <HelperText type='error' padding='none' visible={errors.phone_number.error}>{errors.phone_number.errorText}</HelperText>
            <TextInput
                style={[styles.input, styles.inputMargin]}
                label='E-mail'
                mode='outlined'
                value={email}
                editable={false}
                outlineColor={primaryColour}
                textContentType={'emailAddress'}
            />
            <TextInput
                style={styles.input}
                label='Password'
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
            <DefaultButtonOutlined buttonLabel='EDIT PROFILE' icon='pencil' onPress={() => submitEditProfile()} />
        </DefaultModal>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: backgroundColour
    },
    inputMargin: {
        marginBottom: 20
    }
})

export default HomeEditProfileModal;