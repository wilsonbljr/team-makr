import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { removeUserToSkill } from '../../core/services/skill.service';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import DefaultButton from './DefaultButton';
import { deleteButtonColour, textColour } from '../styles/styles';


const SkillsDeleteForm = () => {
    const { user, token } = useAuth();
    const { skills, setCurrentUserSkills } = useSkills();
    const { showSnack } = useSnackbar();
    const [deleteSkill, setDeleteSkill] = useState('');

    const removeSkillFromPerson = async () => {
        await removeUserToSkill(user, deleteSkill, token)
            .then(res => {
                if (res < 202) {
                    showSnack(false, 'Skill removed!');
                    setCurrentUserSkills(user, token);
                } else {
                    showSnack(true, "No skill selected.")
                }
            })
            .catch(err => showSnack(true, 'Internal Server Error.'));
    }

    return (
        <>
            <RNPickerSelect
                onValueChange={value => setDeleteSkill(value)}
                items={skills.map(skill => { return { label: skill.name, value: skill.id } })}
                placeholder={{ label: 'Select a skill', value: null }}
                value={deleteSkill}
                style={{ ...styles }}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <IconButton icon='menu-down' color={textColour} />
                }}
            />
            <DefaultButton buttonLabel='Remove Skill' icon='delete' color={deleteButtonColour} onPress={() => removeSkillFromPerson()} />
        </>
    )
};

const styles = StyleSheet.create({
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

export default SkillsDeleteForm;