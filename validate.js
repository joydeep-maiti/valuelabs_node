const Joi = require('joi');

const querySchema = Joi.object({
    num1: Joi.number(),
    num2: Joi.number(),
})

const validateQueryParams = ({num1 , num2})=>{
    const result = querySchema.validate({num1 , num2});
    console.log('result',result)
    if(result.error){
        throw new Error();   
    }
}



module.exports = {
    validateQueryParams
}