import { FormValues } from '../data.js';
import { calculateTotal } from '../utils/utils.js';

const form = document.getElementById('form-container');
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const quantityInput = document.getElementById('quantity');
const categoryInput = document.getElementById('category');
const resetBtn = document.getElementById('reset-btn');
const resumenBtn = document.getElementById('resumen-btn');

export function resetPurchaseForm() {
  const defaultFormValues = new FormValues();

  nameInput.value = defaultFormValues.name;
  lastnameInput.value = defaultFormValues.lastname;
  emailInput.value = defaultFormValues.email;
  quantityInput.value = defaultFormValues.quantity;
  categoryInput.value = defaultFormValues.category;
}

function handleInputChange({ target: { name, value } }) {
  console.log(name, value);
}

function getPurchaseData() {
  // Stores the values from each input into an object.
  const formValues = new FormValues();
  Object.keys(formValues).forEach(
    (key) => (formValues[key] = document.getElementById(key).value)
  );

  const total = calculateTotal(
    formValues.category,
    parseInt(formValues.quantity)
  );

  // TO-DO:
  // 1- Validate purchase (name, lastname, email, quantity).
  //   |--> if invalid show error message.
  // 2- if it's valid then update list-items with fullname, email, and total cost.
  document.getElementById(
    'fullname-display'
  ).innerText = `${formValues.name} ${formValues.name}`;
  document.getElementById('email-display').innerText = formValues.email;
  document.getElementById('total-display').innerText = total;
}

export function initializeTicketForm() {
  form.addEventListener('submit', (e) => e.preventDefault());
  nameInput.addEventListener('input', handleInputChange);
  lastnameInput.addEventListener('input', handleInputChange);
  emailInput.addEventListener('input', handleInputChange);
  quantityInput.addEventListener('input', handleInputChange);
  categoryInput.addEventListener('input', handleInputChange);

  resetBtn.addEventListener('click', resetPurchaseForm);
  resumenBtn.addEventListener('click', getPurchaseData);
}
