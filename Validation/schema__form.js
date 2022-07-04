const schema = {
  name: Joi.string().required().label("input-name"),
  email: Joi.string().required().email({ minDomainAtoms: 2 }).label("input-email"),
  phone: Joi.string().min(10).max(11).pattern(/^[0-9]+$/).label("input-phone"),
  job: Joi.string().required().label("select-job"),                                     
  password: Joi.string().required().min(5).label("input-password"),
  check: Joi.string().required().min(5).label("input-confirme-password"),
  website: Joi.url(),
};

export {schema};