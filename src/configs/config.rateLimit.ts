export const configRateLimit = {
    validate: { xForwardedForHeader: false },
    windowMs: 2 * 60 * 1000,
    max: 200,
    message: { status: "Error", code: "429", messages: "Too many request, please try again later" },
};
