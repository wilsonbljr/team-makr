import React from 'react';
import SkillsManageCard from '../../features/SkillsManageCard';
import DefaultView from '../../components/DefaultView';
import SkillsCard from '../../components/SkillsCard';

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