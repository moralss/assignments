const _ = require("lodash");
const { getBusinessOwner } = require("../queries/business-owner");

const validateNewOwner = async data => {
  let businessOwner = await getBusinessOwner(data.email);
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const errors = {};
  
  if (businessOwner !== undefined) {
    errors.email = "email already exits";
  }

  if (data.email === "") {
    errors.email = " email required";
  }

  if (!re.test(data.email)) {
    errors.email = "email is invalid";
  }
  
  if (data.password === "") {
    errors.password = "password required";
  }

  if (!data.password.match(/^[a-z0-9]{5,20}$/)) {
    errors.pasword = "password should consist of numbers and letters";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};

module.exports = {
  validateNewOwner
};
