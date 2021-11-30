import React from 'react';
import DefaultView from '../../components/DefaultView';
import SkillsCard from '../../components/SkillsCard';
import SkillsManageCard from '../../features/SkillsManageCard';

const Skills = () => {
    return (
        <DefaultView>
            <SkillsManageCard />
            <SkillsCard softSkill={0} />
            <SkillsCard softSkill={1} />
        </DefaultView>
    )
}

export default Skills;