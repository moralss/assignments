const validate = value => {
    let error = {};
  
    if (!value.email) {
      error.email = "email is required";
    }
  
    if (!value.phoneNumber) {
      error.phoneNumber = "phone number required";
    }
  
    if (!value.password) {
      error.password = "password is required";
    }
  
    if (!value.confirmPassword) {
        error.confirmPassword = "password confirm is required";
      }

      if (value.confirmPassword && value.confirmPassword !== value.password) {
        error.confirmPassword = "password does not match";
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
  