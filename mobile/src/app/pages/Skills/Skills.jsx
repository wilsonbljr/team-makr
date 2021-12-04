import React from 'react';
import { useSkills } from '../../../core/hooks/useSkills';
import SkillsManageCard from '../../features/SkillsManageCard';
import DefaultView from '../../components/DefaultView';
import SkillsCard from '../../components/SkillsCard';

const Skills = () => {
    const { skills } = useSkills();

    return (
        <DefaultView>
            <SkillsManageCard />
            <SkillsCard skills={skills} softSkill={0} />
            <SkillsCard skills={skills} softSkill={1} />
        </DefaultView>
    )
}

export default Skills;