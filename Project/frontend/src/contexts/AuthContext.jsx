import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const storedData = JSON.parse(localStorage.getItem('user_data'));

    useEffect(() => {
        if (storedData) {
            const { userToken, user } = storedData;
            setToken(userToken);
            setUserData(user);
            setIsAuthenticated(true);  // Corrected 'True' to 'true'
        }
    }, []);

    const login = (newToken, newData) => {
        localStorage.setItem("user_data", JSON.stringify({ userToken: newToken, user: newData }));
        setToken(newToken);
        setUserData(newData);
        setIsAuthenticated(true);  // Corrected 'True' to 'true'
    };

    const logout = () => {
        localStorage.removeItem("user_data");
        setToken(null);
        setUserData(null);
        setIsAuthenticated(false);  // Corrected 'False' to 'false'
    };

    return (
        <AuthContext.Provider 
        value={{ token, isAuthenticated, login, logout, userData }}> {/* Corrected value syntax */}
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
