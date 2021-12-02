import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import { personTeam } from '../../../mock';
import { primaryColour, secondaryColour } from '../styles/styles';
import DefaultButton from './DefaultButton';

const TeamsCard = ({ setModal }) => {
    return (
        <Card style={styles.card}>
            <Card.Title
                title='TEAMS'
                style={styles.cardTitle}
                right={() => <DefaultButton mode='contained' icon='plus-box' buttonLabel='Create Team' style={styles.button} onPress={() => setModal(true)}/>}
            />
            <Card.Content>
                {personTeam.length !== 0
                    ? personTeam.map(team => <List.Item
                        key={team.id}
                        title={team.name}
                        style={styles.listItem}
                        description={team.description.length > 30 ? team.description.substring(0, 30) + '...' : team.description}
                        right={props => <List.Icon {...props} icon='open-in-new' />}
                    />)
                    : <Text style={styles.text}>You haven't joined any teams yet.</Text>
                }
            </Card.Content>
        </Card>
    )
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: primaryColour,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    cardTitle: {
        marginBottom: 20
    },
    button: {
        marginRight: 15
    },
    listItem: {
        borderWidth: 1,
        borderColor: secondaryColour,
        borderRadius: 12,
        marginVertical: 5
    },
    text: {
        marginTop: 14,
        fontFamily: 'MontserratLight'
    },
});

export default TeamsCard;