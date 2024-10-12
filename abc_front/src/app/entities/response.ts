export class Response {
    message: string;
    status: string;

    constructor(message: string, status: string)
    {
        this.message = message;
        this.status = status;
    }
}
