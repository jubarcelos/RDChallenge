validatePropery = (name, value, schema) => {
  const dataForm = {
      [name]: value,
      [email]: value,
      [phone] : value,
      [job]: value,
      [password] : value,
      [check]: value,
      [website]: value,


  };
  const fieldSchema = {
      [name]: schema[name],
      [email]: schema[email],
      [phone] : schema[phone],
      [job]: schema[job],
      [password] : schema[password],
      [checkPassword]: schema[checkPassword],
      [website]: schema[website],
  };
  //return result
  const result = Joi.validate(dataForm, fieldSchema);
  // result.error === null -> valid
}


validate = (data, schema) => {
  const options = {
      abortEarly: false
  };
  const result = Joi.validate(data, schema, options);
  // result.error === null -> valid
};

export { validate, validatePropery }