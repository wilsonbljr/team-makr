import { createContext, useContext, useState } from 'react';
import { getUserTeams } from '../services/team.service';

const TeamsContext = createContext({
    teams: null,
    setCurrentUserTeams: () => { },
    unsetCurrentUserTeams: () => { }
})

export const TeamsContextProvider = ({ children }) => {
    const [teams, setTeams] = useState();

    const setCurrentUserTeams = async (user, token) => {
        await getUserTeams(user, setTeams, token)
            .catch(err => err.message);
    }

    const unsetCurrentUserTeams = () => {
        setTeams(null);
    }

    const contextValue = {
        teams,
        setCurrentUserTeams,
        unsetCurrentUserTeams
    }

    return (
        <TeamsContext.Provider value={contextValue}>
            {children}
        </TeamsContext.Provider>
    )
}

export const useTeams = () => useContext(TeamsContext);