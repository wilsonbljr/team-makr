import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import DefaultButton from './DefaultButton';
import { textColour } from '../styles/styles';
import { skills } from '../../../mock';


const SkillsAddForm = () => {
    const [addSkill, setAddSkill] = useState(null);

    return (
        <>
            <RNPickerSelect
                onValueChange={value => setAddSkill(value)}
                items={skills.map(skill => { return { label: skill.name, value: skill.id } })}
                placeholder={{ label: 'Select a skill', value: null }}
                value={addSkill}
                style={{...styles}}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <IconButton icon='menu-down' color={textColour}/>
                }}
            />
            <DefaultButton buttonLabel='Add Skill' icon='plus' />
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

export default SkillsAddForm;

