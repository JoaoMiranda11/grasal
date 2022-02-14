import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext({});

export default function UserProvider(props) {
    const [usuarios, setUsuarios] = useState({id:1,nome:'', token:'', wealth: '$US'});
    return (
        <UserContext.Provider value={{usuarios, setUsuarios}}>
            {props.children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) throw new Error("e: Provider");
    const { usuarios, setUsuarios } = context;
    return { usuarios, setUsuarios }
}