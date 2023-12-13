import Joi from "joi";

const askSchema = Joi.object({
    imageUrl: Joi.string().required(),
    userId: Joi.string().required(),
    apiKey: Joi.string().required(),
});

export const askValidation = (dataValidation: object): Joi.ValidationResult => {
    return askSchema.validate(dataValidation);
};
