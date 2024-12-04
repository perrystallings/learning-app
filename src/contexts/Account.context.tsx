import { createContext, useContext, useReducer, ReactNode } from 'react';
export const AccountContext = createContext({
    accountUUID: null,
    name: null,
    extraAttributes: {},
});
export const AccountDispatchContext = createContext(null);

export function AccountContextProvider({ children }: { children: ReactNode|ReactNode[] }) {
    const [account, dispatch] = useReducer(
        accountContextReducer,
        {
            accountUUID: null,
            name: null,
            extraAttributes: {},
        }
    );

    return (
        <AccountContext.Provider value={account}>
            <AccountDispatchContext.Provider value={dispatch}>
                {children}
            </AccountDispatchContext.Provider>
        </AccountContext.Provider>
    );
}
export function useAccount() {
    return useContext(AccountContext);
}

export function useAccountDispatch() {
    return useContext(AccountDispatchContext);
}

function accountContextReducer(account: object, action: Object) {
    switch (action.type) {
        case 'select': {
            return {
                accountUUID: action.account.account_uuid,
                name: action.account.name,
                extraAttributes: action.account.extra_attributes
            };
        }
        case 'unselect': {
            return {
                accountUUID: null,
                name: null,
                extraAttributes: {},
            };
        }
        default: {
            throw Error(`Unknown action: ${action.type}`);
        }
    }
}
