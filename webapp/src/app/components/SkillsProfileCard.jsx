import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import { primaryColour, secondaryColour } from '../../core/utils/Variables'
import { Code } from '@mui/icons-material';
import { useSkills } from '../../core/hooks/useSkills';
import { CardCategoryText, CardText } from './CardText';
import AddSkillForm from './AddSkillForm';
import RemoveSkillForm from './RemoveSkillForm';

const SkillsProfileCard = () => {
    const { skills } = useSkills();

    return (
        <Card sx={{ width: '100%', height: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    Skills
                </Typography>}
                avatar={<Code sx={{
                    color: secondaryColour,
                    fontSize: '2em',
                    fontWeight: 500,
                    width: '75px',
                    height: '75px'
                }} />}
            />
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <Grid container flexDirection='column'>
                    <CardText>You currently have {skills.length} skill(s) registered in your profile.</CardText>
                    <CardCategoryText sx={{ pt: 4 }}>Add new skill</CardCategoryText>
                    <CardText sx={{ pb: 4 }}>To edit your skills just add it again with the new level.</CardText>
                    <AddSkillForm />
                    <CardCategoryText sx={{ pt: 3, pb: 2 }}>Remove skill</CardCategoryText>
                    <RemoveSkillForm />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default SkillsProfileCard;