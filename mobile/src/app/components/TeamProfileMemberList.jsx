import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Divider, IconButton, List, Subheading, Text } from 'react-native-paper';
import { team } from '../../../mock';
import { primaryColour, secondaryColour } from '../styles/styles';

const TeamProfileMemberList = () => {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={'MEMBERS'}
                style={styles.cardTitle}
            />
            <Card.Content>
                {team.users.map(user => {
                    return (<List.Item
                        key={user.id}
                        title={<Subheading style={styles.firstName}>{user.firstName}</Subheading>}
                        titleStyle={styles.listTitle}
                        description={<Text style={styles.lastName}>{user.lastName}</Text>}
                        style={styles.listItem}
                        right={() => <IconButton icon='open-in-new' style={styles.icon} />}
                    />)
                })}
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
        marginBottom: 15
    },
    cardTitle: {
        marginBottom: 10
    },
    listItem: {
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: secondaryColour,
        borderRadius: 6,
        marginBottom: 8
    },
    firstName: {
        fontSize: 18,
        fontFamily: 'MontserratMedium'
    },
    lastName: {
        fontSize: 14,
        fontFamily: 'MontserratLight'
    },
    icon: {
        padding: 0,
        margin: 9.5
    },
});

export default TeamProfileMemberList;