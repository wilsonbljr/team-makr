import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { user } from '../../../mock';
import DefaultButtonOutlined from './DefaultButtonOutlined';
import DefaultModal from './DefaultModal';
import { backgroundColour, primaryColour } from '../styles/styles';

const HomeEditProfileModal = ({ modal, setModal }) => {
    const [name, setName] = useState(user.firstName + ' ' + user.lastName);
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');

    return (
        <DefaultModal setModal={setModal} modal={modal} title='Edit your profile'>
            <TextInput
                style={styles.input}
                label='Name'
                mode='outlined'
                editable={false}
                outlineColor={primaryColour}
                value={name}
                textContentType={'name'}
                onChangeText={name => setName(name)}
            />
            <TextInput
                style={styles.input}
                label='Pronouns'
                mode='outlined'
                value={pronouns}
                onChangeText={pronouns => setPronouns(pronouns)}
            />
            <TextInput
                style={styles.input}
                label='Phone Number'
                mode='outlined'
                value={phone}
                textContentType={'telephoneNumber'}
                onChangeText={phone => setPhone(phone)}
            />
            <TextInput
                style={styles.input}
                label='E-mail'
                mode='outlined'
                value={email}
                editable={false}
                outlineColor={primaryColour}
                textContentType={'emailAddress'}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                label='Password'
                mode='outlined'
                value={password}
                textContentType={'password'}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
            />
            <DefaultButtonOutlined buttonLabel='EDIT PROFILE' icon='pencil' />
        </DefaultModal>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 8,
        backgroundColor: backgroundColour
    }
})

export default HomeEditProfileModal;