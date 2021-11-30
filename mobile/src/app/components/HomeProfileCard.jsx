import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Divider, Text, Title } from 'react-native-paper';
import { user, personTeam, personSkills } from '../../../mock';
import { primaryColour, secondaryColour } from '../styles/styles';
import transformNumber from '../../core/utils/TransformNumber'
import DefaultButton from './DefaultButton';

const HomeProfileCard = () => {
    return (
        <Card style={styles.card}>
            <Card.Title title={user.firstName} leftStyle={styles.avatar} left={() => <Avatar.Text size={60} label={user.firstName.charAt(0)} />} />
            <Divider style={styles.divider} />
            <Card.Content>

                <Title style={styles.title}>Pronouns:</Title>
                <Text style={styles.text}>{user.pronoun}</Text>

                <Title style={styles.title}>Email:</Title>
                <Text style={styles.text}>{user.email}</Text>

                <Title style={styles.title}>Phone:</Title>
                <Text style={styles.text}>{transformNumber(user.phone_number)}</Text>

                <DefaultButton style={styles.button} icon='pencil' buttonLabel='Edit Profile' />

                <Title style={styles.title}>Teams:</Title>
                <Text style={styles.text}>You currently are in {personTeam.length} team(s)!</Text>
                <DefaultButton style={styles.button} icon='account-multiple' buttonLabel='Manage Teams' />

                <Title style={styles.title}>Skills:</Title>
                <Text style={styles.text}>You currently have {personSkills.length} skill(s)!</Text>
                <DefaultButton style={styles.lastButton} icon='code-tags' buttonLabel='Manage Skills' />

            </Card.Content>
        </Card>
    )
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: primaryColour,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    avatar: {
        marginRight: 30
    },
    divider: {
        backgroundColor: secondaryColour,
        padding: 0.4,
        marginVertical: 8,
    },
    title: {
        fontFamily: 'MontserratMedium',
        marginBottom: 9
    },
    text: {
        marginBottom: 14,
        fontFamily: 'MontserratLight'
    },
    button: {
        height: 40,
        marginBottom: 25,
        justifyContent: 'center'
    },
    lastButton: {
        height: 40,
        justifyContent: 'center'
    }
});

export default HomeProfileCard;