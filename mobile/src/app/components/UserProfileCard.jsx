import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Divider, Text, Title } from 'react-native-paper';
import { user } from '../../../mock';
import { addButtonColour, primaryColour, secondaryColour } from '../styles/styles';
import transformNumber from '../../core/utils/TransformNumber'
import DefaultButton from './DefaultButton';

const UserProfileCard = ({ setModal }) => {
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

                <DefaultButton style={styles.button} icon='plus' buttonLabel='Add To Team' color={addButtonColour} onPress={() => setModal(true)} />

            </Card.Content>
        </Card>
    )
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: primaryColour,
        borderRadius: 15,
        paddingTop: 15,
        paddingBottom: 5,
        paddingHorizontal: 5,
        marginBottom: 15
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
        marginTop: 30,
        justifyContent: 'center'
    }
});

export default UserProfileCard;