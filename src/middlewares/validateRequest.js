export const validateRequest = (schema, target = 'body') =>{
    return (req, res, next) =>{
        const {error} = schema.validate(req[target], {abortEarly: false});
        if(error){
            return res.status(400).json({
                message: "Validation error",
                details: error.details.map(item => item.message),
            });
        }
    }
}