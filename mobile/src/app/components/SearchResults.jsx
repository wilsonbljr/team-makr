import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Chip, Divider, List, Subheading, Text } from 'react-native-paper';
import { primaryColour, secondaryColour } from '../styles/styles';
import { useSkills } from '../../core/hooks/useSkills';
import { useNavigation } from '@react-navigation/core';


const SearchResults = ({ results }) => {
    const navigation = useNavigation();
    const { allSkills } = useSkills();

    return (
        <Card style={styles.card}>
            <Card.Title
                title={'RESULTS'}
                style={styles.cardTitle}
            />
            <Card.Content>
                <Divider style={styles.divider} />
                {results ? results.map(user => {
                    return (<React.Fragment key={user.id + 4090}>
                        <List.Item
                            key={user.id}
                            title={<Subheading style={styles.name}>{user.firstName + ' ' + user.lastName}</Subheading>}
                            titleStyle={styles.listTitle}
                            description={user.skills?.slice(0, 5).map(skill => {
                                return (
                                    <View key={skill.skillId + 300} style={{ padding: 1 }}>
                                        <Chip key={skill.skillId} mode='outlined' disabled style={styles.chip} textStyle={{ color: secondaryColour }}>
                                            {allSkills.find(s => s.id === skill.skillId).name}
                                        </Chip>
                                    </View>
                                )
                            })
                            }
                            descriptionStyle={styles.chipContainer}
                            descriptionNumberOfLines={5}
                            onPress={() => navigation.navigate('UserProfile', { id: user.id })}
                        />
                        <Divider key={user.id + 3090} style={styles.divider} />
                    </React.Fragment>)
                }) : <Text style={styles.notFoundText}>If you're seeing this here, either you haven't searched yet or we couldn't find anyone</Text>}
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
    },
    notFoundText: {
        marginTop: 20
    }
});

export default SearchResults;