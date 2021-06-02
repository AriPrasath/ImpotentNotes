export const action = (type: string, payload?: any) => {
    return {
        type,
        payload
    };
};

export const getActionType = (action: any): string => {
    return action().type;
}