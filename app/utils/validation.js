export function formValidation() {
  let isNameValidated = false;
  let isLastnameValidated = false;
  let isEmailValidated = false;
  let isQuantityValidated = false;
  let isCategoryValidated = false;

  function nameValidation(text) {
    const regex = /^[a-zA-Z]+(?:[-\s][a-zA-Z]+)*$/;
    let message = '';

    if (regex.test(text) && text.length <= 50) {
      isNameValidated = true;
    } else if (text.length === 0) {
      isNameValidated = false;
      message = 'Campo obligatorio.';
    } else {
      isNameValidated = false;
      message = 'Prohibido utilizar números y caracteres especiales.';
    }

    return { isValidated: isNameValidated, message };
  }

  function lastnameValidation(text) {
    const regex = /^[a-zA-Z]+(?:[-\s][a-zA-Z]+)*$/;
    let message = '';

    if (regex.test(text) && text.length <= 50) {
      isLastnameValidated = true;
    } else if (text.length === 0) {
      isLastnameValidated = false;
      message = 'Campo obligatorio.';
    } else {
      isLastnameValidated = false;
      message = 'Prohibido utilizar números y caracteres especiales.';
    }

    return { isValidated: isLastnameValidated, message };
  }

  function emailValidation(email) {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    let message = '';

    if (regex.test(email) && email.length <= 100 && email.length > 0) {
      isEmailValidated = true;
    } else if (email.length === 0) {
      isEmailValidated = false;
      message = 'Campo obligatorio.';
    } else {
      isEmailValidated = false;
      message = 'Formato de email inválido.';
    }

    return { isValidated: isEmailValidated, message };
  }

  function quantityValidation(quantity) {
    let message = '';

    if (0 < parseInt(quantity) && parseInt(quantity) <= 10) {
      isQuantityValidated = true;
    } else {
      isQuantityValidated = false;
      message = 'Seleccionar cantidad (min: 1 - max: 10)';
    }

    return { isValidated: isQuantityValidated, message };
  }

  function categoryValidation(category) {
    let message = '';

    if (
      category === 'student' ||
      category === 'trainee' ||
      category === 'junior'
    ) {
      isCategoryValidated = true;
    } else if (category === '') {
      isCategoryValidated = false;
      message = 'Campo obligatorio.';
    } else {
      isCategoryValidated = false;
      message = 'Campo obligatorio.';
    }

    return { isValidated: isCategoryValidated, message };
  }

  function checkFullValidation() {
    return (
      isNameValidated &&
      isLastnameValidated &&
      isEmailValidated &&
      isQuantityValidated &&
      isCategoryValidated
    );
  }

  function validation() {
    return {
      checkFullValidation,
      name: nameValidation,
      lastname: lastnameValidation,
      email: emailValidation,
      quantity: quantityValidation,
      category: categoryValidation,
    };
  }

  return validation;
}
