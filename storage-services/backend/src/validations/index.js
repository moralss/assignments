

const validateBusiness = business => {
  return business.businessName && business.phoneNumbers && business.email
    ? true
    : false;
};

const validateLocation = location => {
  return location.street && location.state && location.city && location.id
    ? true
    : false;
};

module.exports = {
  validateBusiness,
  validateLocation
};
