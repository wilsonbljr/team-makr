import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View } from 'react-native';
import { Card, IconButton, List, Subheading, Text } from 'react-native-paper';
import { primaryColour, secondaryColour } from '../styles/styles';

const TeamProfileMemberList = ({ team }) => {
    const navigation = useNavigation();

    return (
        <Card style={styles.card}>
            <Card.Title
                title={'MEMBERS'}
                style={styles.cardTitle}
            />
            <Card.Content>
                {team.users.map(user => {
                    if (user.user_active === 1) {
                        return (<List.Item
                            key={user.id}
                            title={<Subheading style={styles.firstName}>{user.firstName}</Subheading>}
                            titleStyle={styles.listTitle}
                            description={<Text style={styles.lastName}>{user.lastName}</Text>}
                            style={styles.listItem}
                            right={() =>
                                <View style={styles.rightContainer}>
                                    <View style={styles.rightRoleContainer}>
                                        <IconButton icon={user.leader ? 'account' : 'account-multiple'} style={styles.roleIcon} />
                                        <Text>{user.leader ? 'Leader' : 'Member'}</Text>
                                    </View>
                                    <IconButton icon='open-in-new' style={styles.icon} />
                                </View>
                            }
                            onPress={() => navigation.navigate('UserProfile', { id: user.id })}
                        />)
                    } else {
                        return <></>
                    }
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
    rightContainer: {
        flexDirection: 'row'
    },
    rightRoleContainer: {
        width: 80,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    roleIcon: {
        padding: 0,
        margin: -5
    },
    icon: {
        padding: 0,
        margin: 9.5
    },
});

export default TeamProfileMemberList;