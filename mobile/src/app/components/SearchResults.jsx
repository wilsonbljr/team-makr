import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Chip, Divider, IconButton, List, Subheading, Text } from 'react-native-paper';
import { skills, users } from '../../../mock';
import { primaryColour, secondaryColour } from '../styles/styles';

const SearchResults = () => {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={'RESULTS'}
                style={styles.cardTitle}
            />
            <Card.Content>
                <Divider style={styles.divider} />
                {users ? users.map(user => {
                    return (<>
                        <List.Item
                            key={user.id}
                            title={<Subheading style={styles.name}>{user.firstName + ' ' + user.lastName}</Subheading>}
                            titleStyle={styles.listTitle}
                            description={user.skills.slice(0, 5).map(skill => {
                                return (
                                    <View style={{ padding: 1 }}>
                                        <Chip mode='outlined' disabled style={styles.chip} textStyle={{ color: secondaryColour }}>
                                            {skills.find(s => s.id === skill.skillId).name}
                                        </Chip>
                                    </View>
                                )
                            })
                            }
                            descriptionStyle={styles.chipContainer}
                            descriptionNumberOfLines={5}
                        />
                        <Divider style={styles.divider} />
                    </>)
                }) : <Text>If you're seeing this here, either you haven't searched yet or we couldn't find anyone</Text>}
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
    divider: {
        backgroundColor: secondaryColour,
        padding: 0.5,
    },
    name: {
        fontSize: 18,
        fontFamily: 'MontserratMedium',
    },
    icon: {
        padding: 0,
        margin: 9.5
    },
    chipContainer: {
        marginTop: 5,
    },
    chip: {
        backgroundColor: primaryColour,
        borderColor: secondaryColour,
        borderWidth: 0.6,
        marginTop: 2
    }
});

export default SearchResults;