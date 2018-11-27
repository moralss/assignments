const _ = require("lodash");
const { getBusinessOwner } = require("../queries/business-owner");

const validateNewOwner = async data => {
  let bussinessOwner = await getBusinessOwner(data.email);
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const errors = {};

  if (bussinessOwner !== undefined) {
    errors.email = "email already exits";
  }

  if (data.email === undefined) {
    errors.email = " email required";
  }

  
  if (!re.test(data.email)) {
      errors.email = "email is invalid";
  }
  if (data.password === undefined) {
    errors.password = "password required";
  }

  if (!data.password.match(/^[a-z0-9]{5,20}$/)) {
    errors.pasword = "password should consist of numbers and letters";
  }

  let passwordLength = data.password.split("");

  if (passwordLength.length < 6) {
    errors.pasword = "password should be geater then 5";
  }

  console.log(errors);

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};

module.exports = {
  validateNewOwner
};
