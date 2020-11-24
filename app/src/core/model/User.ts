export default interface User {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
}

export const NullUser  = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
}