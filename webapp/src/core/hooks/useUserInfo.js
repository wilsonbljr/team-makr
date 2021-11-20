import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/user.service';

const UserInfoContext = createContext({
    firstName: null,
    lastName: null,
    phone_number: null,
    pronoun: null,
    email: null,
    setCurrentUserInfo: () => { },
    unsetCurrentUserInfo: () => { }
})

export const UserInfoContextProvider = ({ children }) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [pronoun, setPronoun] = useState();
    const [email, setEmail] = useState();
    const [phone_number, setPhoneNumber] = useState();

    const setCurrentUserInfo = async (user, token) => {
        await getUser(user, token)
            .then( (res) => {
                setFirstName(res.firstName);
                setLastName(res.lastName);
                setPronoun(res.pronoun);
                setEmail(res.email);
                setPhoneNumber(res.phone_number);
            })
            .catch(err => err.message);
    }

    const unsetCurrentUserInfo = () => {
        setFirstName(null);
        setLastName(null);
        setPronoun(null);
        setEmail(null);
        setPhoneNumber(null);
    }

    const contextValue = {
        firstName,
        lastName,
        pronoun,
        email,
        phone_number,
        setCurrentUserInfo,
        unsetCurrentUserInfo
    }

    return (
        <UserInfoContext.Provider value={contextValue}>
            {children}
        </UserInfoContext.Provider>
    )
}

export const useUserInfo = () => useContext(UserInfoContext);