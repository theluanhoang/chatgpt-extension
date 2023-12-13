import { Response, Request } from "express";
import { BAD_REQUEST, OK } from "@/core";
import AskService from "@/services/ask.service";
import { askValidation } from "@/helpers";

class AskController {
    createAsk = async (req: Request, res: Response) => {
        const { error, value } = askValidation(req.body);
        if (error) throw new BAD_REQUEST(error.details[0].message, 99);

        new OK({
            message: "Create Ask Successfully",
            metaData: await AskService.createAsk(value),
        }).send(res);
    };
}

export default new AskController();
