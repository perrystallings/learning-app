import {useContext, useEffect} from 'react';
import {Auth0Context} from '@auth0/auth0-react';
import {useUserDispatch} from '@/contexts/User.context';
import {useLocation} from "react-router-dom";

export function LoginPage() {
    const auth0Context = useContext(Auth0Context);
    const location = window.location;

    useEffect(() => {
        if (auth0Context.isAuthenticated) {
            auth0Context.getAccessTokenSilently({detailedResponse: true}).then(
                (token) => {
                    userDispatch(
                        {
                            type: 'updateToken',
                            token,
                        }
                    );
                });
        } else if (!auth0Context.isLoading) {
            let authParams = {
                redirect_uri: location.href,
            };
            if (location.pathname === '/signup') {
                authParams.screen_hint = 'signup';
            }
            console.log(authParams);

            auth0Context.loginWithRedirect({authorizationParams: authParams});
        }
    }, [auth0Context]);
    return (
        <>
        </>
    );
}
