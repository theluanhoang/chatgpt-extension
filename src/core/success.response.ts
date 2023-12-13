import { Response } from "express";
import { StatusCodes, ReasonStatusCodes } from "@/utils";

class SuccessResponse {
    public message: string;
    public status: number;
    public metaData: object;

    constructor({ message = "", status = StatusCodes.OK, reasonStatusCode = ReasonStatusCodes.OK, metaData = {} }) {
        this.message = message ? message : reasonStatusCode;
        this.status = status;
        this.metaData = metaData;
    }

    send(res: Response, headers = {}) {
        return res.status(this.status).json({
            message: this.message,
            code: this.status,
            metaData: this.metaData,
        });
    }
}

class OK extends SuccessResponse {
    constructor({ message = "", metaData = {} }) {
        super({ message, metaData });
    }
}

class CREATE extends SuccessResponse {
    constructor({
        message = "",
        status = StatusCodes.CREATED,
        reasonStatusCode = ReasonStatusCodes.CREATED,
        metaData = {},
    }) {
        super({ message, status, reasonStatusCode, metaData });
    }
}

export { OK, CREATE };
