const validate = value => {
  let error = {};

  if (!value.email) {
    error.email = "email required";
  }

  if (!value.password) {
    error.password = "password required";
  }


  if (!validateEmail(value.email) && value.email) {
    error.email = "invalid email required";
  }

  return error;
};

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export default validate;
