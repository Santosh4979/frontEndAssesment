import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { userMock } from "src/mockData/user";


export interface UserContextType {
    id: number;
    name: string;
    avatar: string;
    department: string;
}

const UserContext = createContext<UserContextType | undefined>(userMock[0]);

const UserProvider  = ({ children }: { children: React.ReactNode }) => 
    {

    const [user, setUser] = useState<UserContextType>(userMock[0]);
    useEffect(() => {
       fetchUser(); 
    },[]) 

    const fetchUser = async () => {
        const response = await fetch('/api/user');
        const data: UserContextType = await response.json();
        console.log('data', data);
        setUser(data);
    }

    console.log('user', user);

    return(
     
        <UserContext.Provider value={useMemo(() => ({ ...user }), [user])}>
            {children}
        </UserContext.Provider>
    )}

export { UserContext, UserProvider };

