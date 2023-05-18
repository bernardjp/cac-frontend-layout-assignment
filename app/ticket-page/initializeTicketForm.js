import { FORM_DEFAULT_VALUES, Pricing } from '../data.js';

const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const resetBtn = document.getElementById('reset-btn');
const resumenBtn = document.getElementById('resumen-btn');

export function resetPurchaseForm() {
  nameInput.value = FORM_DEFAULT_VALUES.name;
  lastnameInput.value = FORM_DEFAULT_VALUES.lastname;
  emailInput.value = FORM_DEFAULT_VALUES.email;
  amountInput.value = FORM_DEFAULT_VALUES.amount;
  categoryInput.value = FORM_DEFAULT_VALUES.category;
}

function getPurchaseData(e) {
  e.preventDefault();

  const formValues = { ...FORM_DEFAULT_VALUES };
  Object.keys(formValues).forEach(
    (key) => (formValues[key] = document.getElementById(key).value)
  );

  const total = calculateTotal(
    formValues.category,
    parseInt(formValues.amount)
  );
  document.getElementById('total').innerText = total;
}

function calculateTotal(category, amount) {
  const pricing = new Pricing();
  return pricing[category] * amount;
}

export function initializeTicketForm() {
  resetBtn.addEventListener('click', resetPurchaseForm);
  resumenBtn.addEventListener('click', getPurchaseData);
}
