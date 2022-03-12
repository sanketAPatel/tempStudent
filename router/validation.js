const joi = require("@hapi/joi");
//const { schema } = require("../model/Student");

//---validating registration ----with hapi joi library--/ this fun will return an error to auth 

const registrationvalidation = (data) => {
  const schema = {
    name: joi.string().min(2),
    email: joi.string().min(2).email().required(),
    password: joi
      .string()
      .min(4)
      ,
    age: joi.number().min(18),
  };
  //return joi.validate(data, schema);
  //return schema.validate(data);
  return schema.validate(data);
};

//---validating login functionality with hapi joi library--/
const loginVAlidation = (data) => {
  const schema = {
    email: joi.string().min(2).email().required(),
    password: joi
      .string()
      .min(4)
      .required()
      .noWhiteSpaces()
      .minOfUppercase(1)
      .minOfSpecialCharacters(1),
  };
  return joi.validate(data, schema);
};
module.exports.registrationvalidation = registrationvalidation;

module.exports.loginVAlidation=loginVAlidation;

//experience:joi.string(),

/* 
   experience: {
        title: joi.string(),
        company: joi.string(),
        duration: joi.string()
      },
      address: {
        streetNumber: joi.string(),
        phone: joi.string(),
        city: joi.string()
      },
      education: {
        degree: joi.string(),
        passingYear: joi.number()       
      }

    */
