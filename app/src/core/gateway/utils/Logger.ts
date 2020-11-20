export default interface Logger {
    info: (statement:string) => string,
    debug: (statement:string) => string,
    error: (statement:string) => string,
    warn: (statement:string) => string,
}