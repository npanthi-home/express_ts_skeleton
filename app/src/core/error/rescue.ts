let rescue = (error: Error, type: string) => {
    if(!(type === typeof error)) {
        throw error;
    } 
};

export default rescue;
