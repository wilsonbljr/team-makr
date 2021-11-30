import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { primaryColour, secondaryColour } from '../styles/styles';
import DefaultButton from './DefaultButton';
import DropDown from "react-native-paper-dropdown";
import { skills } from '../../../mock';

const SkillsAddForm = () => {
    const [addSkill, setAddSkill] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <>
            <DropDown
                label={'Skills'}
                mode={'outlined'}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={addSkill}
                setValue={setAddSkill}
                list={[{label: 'oi', value: 'oi'}]}
                
                dropDownStyle={{backgroundColor: primaryColour}}
                dropDownItemSelectedStyle={{backgroundColor: primaryColour}}
                dropDownItemTextStyle={{backgroundColor: primaryColour}}
                dropDownItemStyle={{backgroundColor: primaryColour}}
                dropDownItemSelectedTextStyle={{backgroundColor: primaryColour}}
            />
            <DefaultButton buttonLabel='Add Skill' icon='plus' />
        </>
    )
};

const styles = StyleSheet.create({
    dropDown: {
        color: 'black'
    }
});

export default SkillsAddForm;