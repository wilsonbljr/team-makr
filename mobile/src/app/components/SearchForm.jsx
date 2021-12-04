import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';
import { searchUsers } from '../../core/services/user.service';
import { StyleSheet } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import DefaultButton from './DefaultButton';
import { textColour } from '../styles/styles';


const SearchForm = ({ setResults }) => {
    const { token } = useAuth();
    const { allSkills } = useSkills();
    const [skillFilter, setSkillFilter] = useState(null);
    const [name, setName] = useState('');

    
    async function search() {
        const splitName = name.split(' ', 2);
        let firstName = splitName[0];
        let lastName = splitName[1];
        await searchUsers(firstName, lastName, skillFilter, token)
            .then(res => {
                setResults(res);
            })
            .catch(err => setAlert(true));
    }

    return (
        <>
            <TextInput
                style={styles.input}
                label='Name'
                mode='outlined'
                value={name}
                textContentType={'name'}
                onChangeText={name => setName(name)}
            />
            <RNPickerSelect
                onValueChange={value => setSkillFilter(value)}
                items={allSkills.map(skill => { return { label: skill.name, value: skill.id } })}
                placeholder={{ label: 'Select Skill', value: null }}
                value={skillFilter}
                style={{ ...pickerStyles }}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <IconButton icon='menu-down' color={textColour} />
                }}
            />
            <DefaultButton buttonLabel='Search' icon='magnify' onPress={() => search()}/>
        </>
    )
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 25,
        height: 45,
    },
})


const pickerStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: textColour,
        borderRadius: 4,
        color: textColour,
        paddingRight: 30,
    },
    inputAndroid: {
        marginBottom: 18,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.8,
        borderColor: textColour,
        borderRadius: 5,
        color: textColour,
        paddingRight: 30,
    },
})

export default SearchForm;

