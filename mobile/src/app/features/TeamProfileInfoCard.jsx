import React from 'react'
import { StyleSheet } from 'react-native';
import { Avatar, Card, Divider, Text, Title } from 'react-native-paper';
import { team } from '../../../mock';
import { backgroundColour, deleteButtonColour, editButtonColour, primaryColour, secondaryColour } from '../styles/styles';
import DefaultButton from '../components/DefaultButton'


const TeamProfileInfoCard = ({ setModal }) => {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={team.name}
                leftStyle={styles.iconContainer}
                left={() => <Avatar.Text label={team.name.charAt(0)} size={60} style={styles.icon} color={backgroundColour} />}
                style={styles.cardTitle}
            />
            <Divider style={styles.divider} />
            <Card.Content>
                <Title style={styles.title}>Team description:</Title>
                <Text style={styles.text}>{team.description}</Text>

                <Title style={styles.title}>Members:</Title>
                <Text style={styles.text}>There are currently {team.users.length} member(s) in this team.</Text>

                <Title style={styles.title}>Edit team:</Title>
                <DefaultButton buttonLabel='EDIT TEAM' icon='pencil' color={editButtonColour} />

                <Title style={styles.title}>Leave team:</Title>
                <DefaultButton buttonLabel='LEAVE TEAM' icon='logout' onPress={() => setModal(true)} color={deleteButtonColour} />
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
        marginTop: 5,
        marginBottom: 5,
    },
    divider: {
        backgroundColor: secondaryColour,
        padding: 0.4,
        marginVertical: 8,
    },
    title: {
        fontFamily: 'MontserratMedium',
        marginTop: 15,
        marginBottom: 9
    },
    text: {
        marginBottom: 14,
        fontFamily: 'MontserratLight'
    }
});

export default TeamProfileInfoCard;