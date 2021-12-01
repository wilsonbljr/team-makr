import React from 'react'
import { StyleSheet } from 'react-native';
import { Card, IconButton, Text, Title } from 'react-native-paper';
import { personSkills } from '../../../mock';
import SkillsAddForm from '../components/SkillsAddForm';
import SkillsDeleteForm from '../components/SkillsDeleteForm';
import { primaryColour, secondaryColour } from '../styles/styles';


const SkillsManageCard = () => {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={'SKILLS'}
                leftStyle={styles.iconContainer}
                left={() => <IconButton icon='code-tags' size={60} style={styles.icon} color={secondaryColour} />}
                style={styles.cardTitle}
            />
            <Card.Content>
                <Text style={styles.text}>You currently have {personSkills.length} skill(s) registered in your profile.</Text>
                
                <Title style={styles.title}>Add new skill:</Title>
                <Text style={styles.text}>To edit your skills just add it again with the new level.</Text>
                <SkillsAddForm />
                <Title style={styles.title}>Remove skill:</Title>
                <SkillsDeleteForm />
            </Card.Content>
        </Card>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: primaryColour,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 15
    },
    iconContainer: {
        marginRight: 35
    },
    icon: {
        marginLeft: 0,
        width: 60,
    },
    cardTitle: {
        marginBottom: 10,
    },
    title: {
        fontFamily: 'MontserratMedium',
        marginTop: 30,
        marginBottom: 9
    },
    text: {
        marginBottom: 14,
        fontFamily: 'MontserratLight'
    },
});

export default SkillsManageCard;