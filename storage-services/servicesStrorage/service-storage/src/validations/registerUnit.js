const validate = value => {
  let erorr = {};

  if (!value.unitName) {
    erorr.unitName = "unit name is required";
  }

  if (!value.unitType) {
    erorr.unitType = "unit type is required";
  }

  if (!value.width) {
    erorr.width = "width is required";
  }

  if (!value.length) {
    erorr.length = "length is required";
  }

  if (!value.height) {
    erorr.height = "height is required";
  }

  if (isNaN(value.height && value.height)) {
    erorr.height = "height should be in meters";
  }

  if (isNaN(value.width) && value.width) {
    erorr.width = "width should be in meters";
  }

  if (isNaN(value.length) && value.length) {
    erorr.length = "length should be in meters";
  }

  return erorr;
};

export default validate;
