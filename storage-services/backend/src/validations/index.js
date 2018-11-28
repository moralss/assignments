
const validateLocation = location => {
  return location.street && location.state && location.city && location.id
    ? true
    : false;
};

module.exports = {
  
  validateLocation
};
