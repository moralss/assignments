const _ = require("lodash");
const { getBusinessByName } = require("../queries/business");
const { getBusinessByEmail } = require("../queries/business");

const validateBusinessInfo = async data => {

  let businessName = await getBusinessByName(data.businessName);
  let businessEmail = await getBusinessByEmail(data.email);

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const errors = {};

  if (businessName.length !== 0) {
    errors.businessName = "business name already exists";
  }

  if (businessEmail.length !== 0) {
    errors.businessEmail = "business email already exists";
  }

  if (!re.test(data.email)) {
    errors.businessEmail = "email is invalid";
  }

  if (data.email === "") {
    errors.businessEmail = "email is required";
  }

  if (data.businessName === "") {
    errors.businessName = " business name required";
  }

  if (data.phoneNumbers === "") {
    errors.phoneNumbers = "phone number required";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};

module.exports = {
  validateBusinessInfo
};
