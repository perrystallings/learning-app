export default interface User {
    userUUID: string;
    name?: string;
    rootToken: string;
    expiration: number;
    uiScopes: string[];
}
