export const validate = value => {
  let error = {};

  if (!value.city) {
    error.city = "city is required";
  }

  if (!value.state) {
    error.state = "state is required";
  }

  if (!value.street) {
    error.street = "street is required";
  }

  if (!value.street) {
    error.street = "street is required";
  }

  if (!value.province) {
    error.province = "province is required";
  }

  return error;
};
