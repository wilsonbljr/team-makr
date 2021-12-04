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
import { ratingReviews } from '../../core/utils/Lists';
import { AirbnbRating } from 'react-native-ratings';


const SkillsAddForm = () => {
    const { user, token } = useAuth();
    const { allSkills, setCurrentUserSkills } = useSkills();
    const { showSnack } = useSnackbar();
    const [addSkill, setAddSkill] = useState(null);
    const [level, setLevel] = useState(2);

    const submitAddSkill = async () => {
        await addUserToSkill(user, addSkill, level, token)
            .then(res => {
                if (res < 202) {
                    showSnack(false, 'Skill added!');
                    setCurrentUserSkills(user, token);
                } 
                if (res === 'Request failed with status code 400') {
                    showSnack(true, 'Skill already in your profile')
                }
            })
            .catch(err => showSnack(true, 'Internal Server Error'));
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
            <AirbnbRating
                size={20}
                reviewColor={textColour}
                reviewSize={16}
                onFinishRating={value => setLevel(value)}
                ratingContainerStyle={ratingStyles.rating}
                starContainerStyle={ratingStyles.stars}
                reviews={ratingReviews} />
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

const ratingStyles = StyleSheet.create({
    rating: {
        flexDirection: 'column-reverse',
        textAlign: 'center',
        marginTop: 15
    },
    stars: {
        margin: 0
    }
});

export default SkillsAddForm;

