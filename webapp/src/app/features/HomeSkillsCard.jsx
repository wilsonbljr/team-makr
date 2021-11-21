import React from 'react'
import { Card, CardContent, CardHeader, Divider, Grid, List, ListItem, ListItemText, Rating, Typography } from '@mui/material';
import { primaryColour } from '../../core/utils/Variables';
import { useSkills } from '../../core/hooks/useSkills';
import SkillList from '../components/SkillList';

const HomeSkillsCard = (props) => {
    const { skills } = useSkills();

    function skillsMap() {
        // Checks if there is a skill
        const array = skills.find(skill => skill.softSkill !== props.softSkill);
        if (array === 0 || array === undefined) {
            // If there isn't returns a message instead of the card
            return (
                <>
                <Divider />
                <Typography sx={{ pl: 2, pb: 2, pt: 2 }} variant='body1'>You haven't added any skills yet</Typography>
                </>
            )
        } else {
            return skills.map((skill) => {
                if (skill.softSkill !== props.softSkill && skill.id !== null) {
                    return (
                        <>
                            <Divider />
                            <SkillList id={skill.id} level={skill.level} name={skill.name} />
                        </>
                    )
                }
            })
        }
    }

    return (
        <Card sx={{ width: '100%', height: '100%', background: primaryColour, p: 0, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    {props.softSkill === 1 ? 'Hard' : 'Soft'} skills
                </Typography>}
            />
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px', p: 0 }}>
                <List sx={{ alignItems: 'center' }}>
                    {skillsMap()}
                    <Divider />
                </List>
            </CardContent>
        </Card>

    )
};

export default HomeSkillsCard;