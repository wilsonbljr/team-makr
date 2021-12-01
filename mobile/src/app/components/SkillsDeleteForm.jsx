import React, { useState } from 'react';
import { textColour } from '../styles/styles';
import DefaultButton from './DefaultButton';
import { personSkills } from '../../../mock';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const SkillsDeleteForm = () => {
    const [deleteSkill, setDeleteSkill] = useState('');

    return (
        <>
            <RNPickerSelect
                onValueChange={value => setDeleteSkill(value)}
                items={personSkills.map(skill => { return { label: skill.name, value: skill.id } })}
                placeholder={{ label: 'Select a skill', value: null }}
                value={deleteSkill}
                style={{ ...styles }}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <IconButton icon='menu-down' color={textColour} />
                }}
            />
            <DefaultButton buttonLabel='Remove Skill' icon='delete' color={'#bf1206dd'} />
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