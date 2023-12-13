import Joi from "joi";

const transactionSchema = Joi.object({
    cassoTransactionId: Joi.number().required(),
    bankTransactionId: Joi.string().required(),
    userId: Joi.string().required(),
    cash: Joi.required(),
});

export const transactionValidation = (dataValidation: object): Joi.ValidationResult => {
    return transactionSchema.validate(dataValidation);
};
