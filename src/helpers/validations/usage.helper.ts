import Joi from "joi";

export const createApiKeyValidation = (dataValidation: object): Joi.ValidationResult => {
    return Joi.object({ userId: Joi.string().required() }).validate(dataValidation);
};
