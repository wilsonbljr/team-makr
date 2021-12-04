import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { addUserToSkill } from '../../core/services/skill.service';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import DefaultButton from './DefaultButton';
import { textColour } from '../styles/styles';


const SkillsAddForm = () => {
    const { user, token } = useAuth();
    const { showSnack } = useSnackbar();
    const { allSkills } = useSkills();
    const [addSkill, setAddSkill] = useState(null);
    const [level, setLevel] = useState(2);

    const submitAddSkill = async () => {
        await addUserToSkill(user, addSkill, level, token)
            .then(res => {
                if (res < 202) {
                    showSnack(false, 'Skill added!');
                    setCurrentUserSkills(user, token);
                } else {
                    showSnack(true, 'Internal server error.');
                }
            })
            .catch(err => showSnack(true, 'Internal server error.'));
    };

    return (
        <>
            <RNPickerSelect
                onValueChange={value => setAddSkill(value)}
                items={allSkills.map(skill => { return { label: skill.name, value: skill.id } })}
                placeholder={{ label: 'Select a skill', value: null }}
                value={addSkill}
                style={{ ...styles }}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <IconButton icon='menu-down' color={textColour} />
                }}
            />
            <DefaultButton buttonLabel='Add Skill' icon='plus' onPress={() => submitAddSkill()} />
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
});

export default SkillsAddForm;

