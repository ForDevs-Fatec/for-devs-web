import { ReactNode, createContext, useContext, useState, } from 'react';
import { User } from '../utils/interfaces/UserInterface'

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

interface UserProvideProps {
    children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({children}: UserProvideProps) {
    const [user, setUser] = useState<User | null>(null);

    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}