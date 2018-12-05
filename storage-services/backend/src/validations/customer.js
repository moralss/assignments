const _ = require("lodash");
const { getCustomerInfo } = require("../queries/customer");

const validateNewCustomer = async data => {
  let customer = await getCustomerInfo(data.email);
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(data);
  const errors = {};

  if (customer !== undefined) {
    errors.email = "email already exits";
  }

  if (data.phoneNumber === undefined) {
    errors.phoneNumber = "phone numbers is required";
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

  console.log(errors);

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};

module.exports = {
  validateNewCustomer
};
