import {Outlet} from "react-router-dom";
import {Auth0Context} from "@auth0/auth0-react";
import {useContext, useEffect} from "react";
import {useAccount, useAccountDispatch} from "@/contexts/Account.context";
import {useNavigate} from "react-router";
import {useUserDispatch} from "@/contexts/User.context";


export default function UserRoot() {
    const auth0Context = useContext(Auth0Context);
    const userDispatch = useUserDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        userDispatch({type: "update", user: {
            name: "Perry Stallings"
            }})
    }, []);
    // useEffect(() => {
    //     if (!auth0Context.isAuthenticated && !auth0Context.isLoading) {
    //         navigate('/login');
    //     }
    //     if (auth0Context.isAuthenticated) {
    //         auth0Context.getAccessTokenSilently({detailedResponse: true}).then(
    //             (token) => {
    //                 userDispatch(
    //                     {
    //                         type: 'update',
    //                         user: {
    //                             userUUID: auth0Context.user!.user_uuid,
    //                             token,
    //                         }
    //                     }
    //                 );
    //             });
    //     }
    //
    // }, [auth0Context]);

    return (
        <Outlet/>
    )
}
