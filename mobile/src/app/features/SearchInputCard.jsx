import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import SearchForm from '../components/SearchForm';
import { primaryColour, secondaryColour } from '../styles/styles';


const SearchInputCard = () => {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={'SEARCH'}
                leftStyle={styles.iconContainer}
                left={() => <IconButton icon='magnify' size={60} style={styles.icon} color={secondaryColour} />}
                style={styles.cardTitle}
            />
            <Card.Content>
                <Text style={styles.text}>You can search people by name, skill or both!</Text>
                <SearchForm />
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
        marginBottom: 35,
    },
    title: {
        fontFamily: 'MontserratMedium',
        marginTop: 30,
        marginBottom: 9
    },
    text: {
        marginBottom: 35,
        fontFamily: 'MontserratLight'
    },
});

export default SearchInputCard;