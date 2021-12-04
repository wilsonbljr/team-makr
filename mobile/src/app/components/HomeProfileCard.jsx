import React from 'react';
import { useAuth } from '../../auth/AuthContext';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Divider, Text, Title } from 'react-native-paper';
import DefaultButton from './DefaultButton';
import transformNumber from '../../core/utils/TransformNumber';
import { primaryColour, secondaryColour } from '../styles/styles';
import { user, personTeam, personSkills } from '../../../mock';
import DefaultButtonOutlined from './DefaultButtonOutlined';


const HomeProfileCard = ({ setModal, navigation }) => {
    const { unsetCurrentUser } = useAuth();

    const logout = async () => {
        await unsetCurrentUser()
            .then((res) => {
                if (res.status !== 204) {
                    throw Error('Internal server error')
                }
            })
            .catch(err => err);
    }

    return (
        <Card style={styles.card}>
            <Card.Title
                title={user.firstName}
                leftStyle={styles.avatar}
                left={() => <Avatar.Text
                    size={60}
                    label={user.firstName.charAt(0)}
                />}
                right={() => <DefaultButtonOutlined 
                    buttonLabel='Logout'
                    style={styles.logout}
                    labelStyle={styles.logoutText}
                    icon='exit-to-app'
                    onPress={() => logout()}
                    />}
            />
            <Divider style={styles.divider} />
            <Card.Content>

                <Title style={styles.title}>Pronouns:</Title>
                <Text style={styles.text}>{user.pronoun}</Text>

                <Title style={styles.title}>Email:</Title>
                <Text style={styles.text}>{user.email}</Text>

                <Title style={styles.title}>Phone:</Title>
                <Text style={styles.text}>{transformNumber(user.phone_number)}</Text>

                <DefaultButton
                    style={styles.button}
                    icon='pencil'
                    buttonLabel='Edit Profile'
                    onPress={() => setModal(true)}
                />

                <Title style={styles.title}>Teams:</Title>
                <Text style={styles.text}>You currently are in {personTeam.length} team(s)!</Text>
                <DefaultButton style={styles.button} icon='account-multiple' buttonLabel='Manage Teams' onPress={() => navigation.navigate('Teams')} />

                <Title style={styles.title}>Skills:</Title>
                <Text style={styles.text}>You currently have {personSkills.length} skill(s)!</Text>
                <DefaultButton style={styles.lastButton} icon='code-tags' buttonLabel='Manage Skills' onPress={() => navigation.navigate('Skills')} />

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
    logout: {
        marginTop: 2,
        marginRight: 10,
        borderColor: secondaryColour,
        borderWidth: 1,
    },
    logoutText: {
        color: secondaryColour,
        fontSize: 15
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