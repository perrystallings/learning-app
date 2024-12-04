import { createContext, useContext, useReducer } from 'react';
import UserType from  '@/types/User'
export const UserContext = createContext({
    userUUID: null,
    rootToken: null,
    uiScopes: [],
    expiration: 0,
});
export const UserDispatchContext = createContext(null);

export function UserContextProvider({ children }) {
    const [user, dispatch] = useReducer(
        userContextReducer,
        {
            user_uuid: null,
            token: null,
            expiration: 0,
        }
    );

    return (
        <UserContext.Provider value={user}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}
export function useUser(): UserType {
    return useContext(UserContext);
}

export function useUserDispatch() {
    return useContext(UserDispatchContext);
}

function userContextReducer(user: UserType, action: Object) {
    switch (action.type) {
        case "update": {
            return {
                ...action.user,
                ...user
            }
        }
        case 'login': {
            return {
                user_uuid: action.user.user_uuid,
                token: null,
                uiScopes: [],
                expiration: 0,
            };
        }
        case 'updateToken': {
            return {
                ...user,
                uiScopes: action.token.scope.split(' ').filter((scope: string) => scope.includes('ui:')),
                token: action.token.access_token,
                expiration: action.token.expires_in * 100 + Date.now(),
            };
        }
        case 'logout': {
            return {
                user_uuid: null,
                token: null,
                uiScopes: [],
                expiration: 0,
            };
        }
        default: {
            throw Error(`Unknown action: ${action.type}`);
        }
    }
}
