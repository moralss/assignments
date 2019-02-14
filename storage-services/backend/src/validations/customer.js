const _ = require("lodash");
const {
  getCustomerInfo,
  getCustomerByUserName
} = require("../queries/customer");

const validateNewCustomer = async data => {
  let customer = await getCustomerInfo(data.email);
  let customerUser = await getCustomerByUserName(data.userName);

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errors = {};

  if (customer !== undefined) {
    errors.email = "Email already exists";
  }

  if (customerUser !== undefined) {
    errors.userName = "User name already exists";
  }

  if (data.userName === undefined) {
    errors.userName = "User name is required";
  }

  if (data.email !== undefined && !re.test(data.email)) {
    errors.email = "email is invalid";
  }

  if (data.password === undefined) {
    errors.password = "password is required";
  }

  if (data.password !== undefined && !data.password.match(/^[a-z0-9]{5,20}$/)) {
    errors.pasword = "password should consist of numbers and letters";
    // }
  }

  if (data.confirmPassword === undefined) {
    errors.confirmPassword = "password confirm is required";
  }

  if (
    data.confirmPassword === undefined &&
    data.confirmPassword !== data.password
  ) {
    errors.confirmPassword = "password does not match";
  }


  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};

module.exports = {
  validateNewCustomer
};
