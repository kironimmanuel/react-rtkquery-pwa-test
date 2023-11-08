export interface AxiosErrorWithResponse extends Error {
    response: {
        data: {
            msg: string;
        };
    };
}
