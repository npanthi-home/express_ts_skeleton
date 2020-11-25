export default interface User {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    isAdmin?: boolean,
}

export const NullUser  = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
}