function phoneValidation(phoneId) {
  // Get the phone number from the input field
  const phoneNumber = document.getElementById(phoneId).value;

  // Define regex patterns for country codes and phone numbers
  const patterns = {
    India: {
      code: /^\+91/,
      mobile: /^\+91\s[6-9]\d{9}$/,
      landlineCode: /^0141/,
      landline: /^(0141)-\d{6}$/
    },
    UnitedKingdom: {
      code: /^\+44/,
      mobile: /^\+44\s\d{2}\s\d{4}\s\d{4}$/
    },
    Australia: {
      code: /^\+61/,
      mobile: /^\+61\s\d{1}\s\d{4}\s\d{4}$/
    },
    Germany: {
      code: /^\+49/,
      mobile: /^\+49\s\d{2}\s\d{8}$/
    },
    France: {
      code: /^\+33/,
      mobile: /^\+33\s\d{1}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/
    },
    Japan: {
      code: /^\+81/,
      mobile: /^\+81\s\d{2}-\d{4}-\d{4}$/
    },
    SouthAfrica: {
      code: /^\+27/,
      mobile: /^\+27\s\d{2}\s\d{3}\s\d{4}$/
    },
    Brazil: {
      code: /^\+55/,
      mobile: /^\+55\s\d{2}\s\d{5}-\d{4}$/
    },
    UnitedStates: {
      code: /^\+1/,
      mobile: /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/
    }
  };

  // Get the message element
  const message = document.getElementById("message");
  const submitButton = document.getElementById("submit");

  // Reset styles and disable submit button by default
  message.style.color = "green";
  submitButton.disabled = true;

  // Helper function to display messages
  function setMessage(content, isValid) {
    message.textContent = content;
    message.style.color = isValid ? "green" : "red";
    submitButton.disabled = !isValid;
  }

  // Check country codes and validate numbers
  if (patterns.India.code.test(phoneNumber)) {
    if (patterns.India.mobile.test(phoneNumber)) {
      setMessage("Valid Indian Mobile Number", true);
    } else {
      setMessage("Invalid Indian Number", false);
    }
  } else if (patterns.India.landlineCode.test(phoneNumber)) {
    if (patterns.India.landline.test(phoneNumber)) {
      setMessage("Valid Indian Landline Number", true);
    } else {
      setMessage("Invalid Indian Landline Number", false);
    }
  } else if (patterns.UnitedKingdom.code.test(phoneNumber)) {
    if (patterns.UnitedKingdom.mobile.test(phoneNumber)) {
      setMessage("Valid UK Number", true);
    } else {
      setMessage("Invalid UK Number", false);
    }
  } else if (patterns.Australia.code.test(phoneNumber)) {
    if (patterns.Australia.mobile.test(phoneNumber)) {
      setMessage("Valid Australia Number", true);
    } else {
      setMessage("Invalid Australia Number", false);
    }
  } else if (patterns.Germany.code.test(phoneNumber)) {
    if (patterns.Germany.mobile.test(phoneNumber)) {
      setMessage("Valid Germany Number", true);
    } else {
      setMessage("Invalid Germany Number", false);
    }
  } else if (patterns.France.code.test(phoneNumber)) {
    if (patterns.France.mobile.test(phoneNumber)) {
      setMessage("Valid France Number", true);
    } else {
      setMessage("Invalid France Number", false);
    }
  } else if (patterns.Japan.code.test(phoneNumber)) {
    if (patterns.Japan.mobile.test(phoneNumber)) {
      setMessage("Valid Japan Number", true);
    } else {
      setMessage("Invalid Japan Number", false);
    }
  } else if (patterns.SouthAfrica.code.test(phoneNumber)) {
    if (patterns.SouthAfrica.mobile.test(phoneNumber)) {
      setMessage("Valid South African Number", true);
    } else {
      setMessage("Invalid South African Number", false);
    }
  } else if (patterns.Brazil.code.test(phoneNumber)) {
    if (patterns.Brazil.mobile.test(phoneNumber)) {
      setMessage("Valid Brazil Number", true);
    } else {
      setMessage("Invalid Brazil Number", false);
    }
  } else if (patterns.UnitedStates.code.test(phoneNumber)) {
    if (patterns.UnitedStates.mobile.test(phoneNumber)) {
      setMessage("Valid US/Canada Number", true);
    } else {
      setMessage("Invalid US/Canada Number", false);
    }
  } else if (!phoneNumber.trim()) {
    setMessage("", false); // Clear message if input is empty
  } else {
    setMessage("Invalid Number", false);
  }
}
