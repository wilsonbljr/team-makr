import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Divider, List, Subheading, Text } from 'react-native-paper';
import { personSkills } from '../../../mock';
import { primaryColour, secondaryColour, textColour } from '../styles/styles';
import { AirbnbRating } from 'react-native-ratings';

const ratingReviews = ['Being Developed', 'Basic', 'Intermediate', 'Advanced', 'Expert'];

function skillsMap(personSkills, softSkill) {
    // Checks if there is a skill
    const array = personSkills.find(skill => skill.softSkill !== softSkill);
    if (array !== 0 && array !== undefined) {
        // If there is returns the card
        return personSkills.map((skill) => {
            if (skill.softSkill !== softSkill && skill.id !== null) {
                // Random keys for react fragment and divider so it doesn't trigger unique key error
                return (
                    <React.Fragment key={skill.id + 3659}> 
                        <Divider style={styles.divider} key={skill.id + 4659} />
                        <List.Item
                            key={skill.id}
                            title={<Subheading>{skill.name}</Subheading>}
                            titleStyle={styles.listTitle}
                            style={styles.listItem}
                            right={() => <AirbnbRating
                                size={16}
                                isDisabled
                                reviewColor={textColour}
                                reviewSize={14}
                                defaultRating={skill.level}
                                ratingContainerStyle={styles.rating}
                                starContainerStyle={styles.stars}
                                reviews={ratingReviews} />}
                        />
                    </React.Fragment>
                )
            }
            return
        })
    }
    // Otherwise, returns a message
    return (
        <>
            <Divider />
            <Text>You haven't added any skills yet</Text>
        </>
    )
}

const SkillsCard = (props) => {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={props.softSkill === 1 ? 'HARD SKILLS' : 'SOFT SKILLS'}
                style={styles.cardTitle}
            />
            <Card.Content>
                {skillsMap(personSkills, props.softSkill)}
                <Divider style={styles.divider} />
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
        marginVertical: 8,
    },
    rating: {
        flexDirection: 'column-reverse',
        textAlign: 'center',
        width: 130,
        marginTop: 8
    },
    stars: {
        margin: 0
    },
    listItem: {
        paddingVertical: 0
    },
    text: {
        marginTop: 14,
        fontFamily: 'MontserratLight'
    },
});

export default SkillsCard;