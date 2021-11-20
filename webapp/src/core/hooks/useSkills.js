import { createContext, useContext, useState } from 'react';
import { getUserSkills } from '../services/skill.service';


const SkillsContext = createContext({
    skills: null,
    setCurrentUserSkills: () => { },
    unsetCurrentUserSkills: () => { }
})

export const SkillsContextProvider = ({ children }) => {
    const [skills, setSkills] = useState();

    const setCurrentUserSkills = async (user, token) => {
        await getUserSkills(user, setSkills, token)
            .catch(err => err.message);
    }

    const unsetCurrentUserSkills = () => {
        setSkills(null);
    }

    const contextValue = {
        skills,
        setCurrentUserSkills,
        unsetCurrentUserSkills
    }

    return (
        <SkillsContext.Provider value={contextValue}>
            {children}
        </SkillsContext.Provider>
    )
}

export const useSkills = () => useContext(SkillsContext);