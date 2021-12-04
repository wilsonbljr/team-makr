import React, { createContext, useContext, useState } from 'react';
import { getAllSkills, getUserSkills } from '../services/skill.service';


const SkillsContext = createContext({
    skills: null,
    allSkills: null,
    setCurrentUserSkills: () => { },
    unsetCurrentUserSkills: () => { },
    setCurrentAllSkills: () => { },
    unsetCurrentAllSkills: () => { }
})

export const SkillsContextProvider = ({ children }) => {
    const [skills, setSkills] = useState();
    const [allSkills, setAllSkills] = useState();
    
    const setCurrentUserSkills = async (user, token) => {
        await getUserSkills(user, setSkills, token)
            .catch(err => err.message);
    }

    const unsetCurrentUserSkills = () => {
        setSkills(null);
    }

    const setCurrentAllSkills = async (token) => {
        await getAllSkills(setAllSkills, token)
            .catch(err => err.message);
    }

    const unsetCurrentAllSkills = () => {
        setAllSkills(null);
    }

    const contextValue = {
        skills,
        allSkills,
        setCurrentUserSkills,
        unsetCurrentUserSkills,
        setCurrentAllSkills,
        unsetCurrentAllSkills
    }

    return (
        <SkillsContext.Provider value={contextValue}>
            {children}
        </SkillsContext.Provider>
    )
}

export const useSkills = () => useContext(SkillsContext);