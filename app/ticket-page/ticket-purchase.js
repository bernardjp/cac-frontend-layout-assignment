import { initializeLayout } from './initializeLayout.js';
import { initializeTicketForm } from './initializeTicketForm.js';

function initialize() {
  initializeLayout();
  initializeTicketForm();
}

initialize();

// const discounts = new Discounts();
// const FORM_DEFAULT_VALUES = {
//   name: '',
//   lastname: '',
//   email: '',
//   amount: '',
//   category: 'student',
// };

// const basePriceText = document.getElementById('ticket-price');
// const studentRateText = document.getElementById('student-discount-rate');
// const traineeRateText = document.getElementById('trainee-discount-rate');
// const juniorRateText = document.getElementById('junior-discount-rate');

// Purchase form
// const nameInput = document.getElementById('name');
// const lastnameInput = document.getElementById('lastname');
// const emailInput = document.getElementById('email');
// const amountInput = document.getElementById('amount');
// const categoryInput = document.getElementById('category');
// const resetBtn = document.getElementById('reset-btn');
// const resumenBtn = document.getElementById('resumen-btn');

// function resetPurchaseForm() {
//   nameInput.value = FORM_DEFAULT_VALUES.name;
//   lastnameInput.value = FORM_DEFAULT_VALUES.lastname;
//   emailInput.value = FORM_DEFAULT_VALUES.email;
//   amountInput.value = FORM_DEFAULT_VALUES.amount;
//   categoryInput.value = FORM_DEFAULT_VALUES.category;
// }

// function getPurchaseData(e) {
//   e.preventDefault();

//   const formValues = { ...FORM_DEFAULT_VALUES };
//   Object.keys(formValues).forEach(
//     key => (formValues[key] = document.getElementById(key).value)
//   );

//   const total = discounts[formValues.category] * parseInt(formValues.amount);
//   document.getElementById('total').innerText = total;
// }

// resetBtn.addEventListener('click', resetPurchaseForm);
// resumenBtn.addEventListener('click', getPurchaseData);

// Set the defaults values.
// document.addEventListener('DOMContentLoaded', () => {
//   const defaultOption = document.getElementById(
//     `${FORM_DEFAULT_VALUES.category}-option`
//   );
//   defaultOption.setAttribute('selected', true);

//   basePriceText.innerText = `VALOR DE TICKET $${discounts.basePrice}`;
//   studentRateText.innerText = `${discounts.studentRate * 100}%`;
//   traineeRateText.innerText = `${discounts.traineeRate * 100}%`;
//   juniorRateText.innerText = `${discounts.juniorRate * 100}%`;

//   resetPurchaseForm();
// });
