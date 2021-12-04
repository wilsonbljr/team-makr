import React, { createContext, useContext, useEffect, useState } from 'react';

const SnackbarContext = createContext({
    snackSuccess: false,
    snackSuccessMessage: null,
    snackError: false,
    snackErrorMessage: null,
    showSnack: () => { },
    closeSnack: () => { }
})

export const SnackbarContextProvider = ({ children }) => {
    const [snackSuccess, setSnackSuccess] = useState(false);
    const [snackError, setSnackError] = useState(false);
    const [snackSuccessMessage, setSnackSuccessMessage] = useState('Unknown success');
    const [snackErrorMessage, setSnackErrorMessage] = useState('Unknown error');

    const showSnack = (isError, message) => {
        if (isError === true) {
            setSnackErrorMessage(message);
            setSnackError(true);
        }
        if (isError === false) {
            setSnackSuccessMessage(message);
            setSnackSuccess(true);
        }
    }

    const closeSnack = (isError) => {
        if (isError === true) {
            setSnackError(false);
        }
        if (isError === false) {
            setSnackSuccess(false);
        }
    }

    const contextValue = {
        snackSuccess,
        snackSuccessMessage,
        snackError,
        snackErrorMessage,
        showSnack,
        closeSnack
    }

    return (
        <SnackbarContext.Provider value={contextValue}>
            {children}
        </SnackbarContext.Provider>
    )
};

export const useSnackbar = () => useContext(SnackbarContext)