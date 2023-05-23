import { FormValues } from '../data.js';
import { calculateTotal } from '../utils/utils.js';
import { formValidation } from '../utils/validation.js';

// Form Elements
const form = document.getElementById('form-container');
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const quantityInput = document.getElementById('quantity');
const categoryInput = document.getElementById('category');

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
  console.log(name, value);

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
    // Reset information
    form.className = 'was-validated';
    resetInfoDisplay();

    console.log('ERROR: Form is not validated');
  }
}

function resetInfoDisplay() {
  console.log('reset info');
  personalInfoDisplay.classList.replace('flex-column', 'd-none');
  fullnameDisplay.innerText = '';
  emailDisplay.innerText = '';
  totalDisplay.innerText = '';
}

export function resetPurchaseForm(e) {
  e.preventDefault();
  const defaultFormValues = new FormValues();

  nameInput.value = defaultFormValues.name;
  lastnameInput.value = defaultFormValues.lastname;
  emailInput.value = defaultFormValues.email;
  quantityInput.value = defaultFormValues.quantity;
  categoryInput.value = defaultFormValues.category;

  resetInfoDisplay();
}

export function initializeTicketForm() {
  form.addEventListener('submit', getPurchaseData);
  nameInput.addEventListener('input', handleInputChange);
  lastnameInput.addEventListener('input', handleInputChange);
  emailInput.addEventListener('input', handleInputChange);
  quantityInput.addEventListener('input', handleInputChange);
  categoryInput.addEventListener('input', handleInputChange);

  resetBtn.addEventListener('click', resetPurchaseForm);
  resumenBtn.addEventListener('click', getPurchaseData);
}
