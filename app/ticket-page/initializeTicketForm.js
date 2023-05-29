import { FormValues } from '../data.js';
import { calculateTotal } from '../utils/utils.js';
import { formValidation } from '../utils/validation.js';

// Form Elements
const form = document.getElementById('form-container');
const inputs = document.querySelectorAll('.form-control');

// Purchase data display
const personalInfoDisplay = document.getElementById('purchase-personal-info');
const fullnameDisplay = document.getElementById('fullname-display');
const emailDisplay = document.getElementById('email-display');
const totalDisplay = document.getElementById('total-display');

// Form action buttons
const resetBtn = document.getElementById('reset-btn');
const resumenBtn = document.getElementById('resumen-btn');

// Validation State manager
const validation = formValidation();

function handleInputChange({ target: { name, value } }) {
  const inputValidation = validation()[name];
  const { isValidated, message } = inputValidation(value);

  const input = document.getElementById(name);
  const errorMessageSpan = document.getElementById(`${name}-error`);

  if (isValidated) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    errorMessageSpan.innerText = '';
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    errorMessageSpan.innerText = message;
  }
}

function getPurchaseData(e) {
  e.preventDefault();

  // Stores the values from each input into an object.
  const formValues = new FormValues();
  Object.keys(formValues).forEach(
    (key) => (formValues[key] = document.getElementById(key).value)
  );

  // Form Validation
  if (validation().checkFullValidation()) {
    const total = calculateTotal(
      formValues.category,
      parseInt(formValues.quantity)
    );

    // Display information
    personalInfoDisplay.classList.replace('d-none', 'flex-column');
    fullnameDisplay.innerText = `${formValues.name} ${formValues.name}`;
    emailDisplay.innerText = formValues.email;
    totalDisplay.innerText = total;
  } else {
    // Shows validation errors under each input
    form.className = 'was-validated';
    inputs.forEach((input) => handleInputChange({ target: input }));

    // Reset information
    resetInfoDisplay();
  }
}

export function resetPurchaseForm(e) {
  e.preventDefault();
  const defaultFormValues = new FormValues();

  form.classList.remove('was-validated');
  inputs.forEach((input) => resetInput(input, defaultFormValues[input.name]));

  resetInfoDisplay();
}

function resetInfoDisplay() {
  personalInfoDisplay.classList.replace('flex-column', 'd-none');
  fullnameDisplay.innerText = '';
  emailDisplay.innerText = '';
  totalDisplay.innerText = '';
}

function resetInput(input, defaultValue) {
  input.value = defaultValue;

  // Reset input validation display
  input.classList.remove('is-valid');
  input.classList.remove('is-invalid');

  // Reset input validation error message
  const errorMessage = document.getElementById(`${input.name}-error`);
  errorMessage.innerText = '';
}

export function initializeTicketForm() {
  inputs.forEach((input) => input.addEventListener('input', handleInputChange));
  resetBtn.addEventListener('click', resetPurchaseForm);
  resumenBtn.addEventListener('click', getPurchaseData);
}
