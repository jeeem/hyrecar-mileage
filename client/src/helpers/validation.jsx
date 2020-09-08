const validation = {
  text: (value) => {
    const isLetters = RegExp('^[a-zA-Z]*$');
    return isLetters.test(value);
  },
  textComplete: (value) => {
    const isLetters = RegExp('^[a-zA-Z]*$');
    if (isLetters.test(value)) {
      return !!value.length
    }
    return false;
  },
  license: (value) => {
    const isLetters = RegExp('^[a-zA-Z0-9\-]*$');
    if (isLetters.test(value)) {
      return value.length <= 10
    };
    return false;
  },
  licenseComplete: (value) => {
    const isLetters = RegExp('^[a-zA-Z0-9\-]*$');
    if (isLetters.test(value)) {
      return (value.length >= 5 && value.length <= 10)
    }
    return false;
  },
  number: (value) => {
    const isNumber = RegExp('^[0-9]*$');
    return isNumber.test(value);
  },
  numberComplete: (value) => {
    const isNumber = RegExp('^[0-9]*$');
    return isNumber.test(value);
    if (isNumber.test(value)) {
      return value >= 0;
    };
    return false;
  }
}

export default validation
