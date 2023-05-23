import { FormValues, Pricing } from '../data.js';
import { resetPurchaseForm } from './initializeTicketForm.js';

export function initializeLayout() {
  const pricing = new Pricing();
  const { category } = new FormValues();

  const basePriceText = document.getElementById('ticket-price');
  const studentRateText = document.getElementById('student-discount-rate');
  const traineeRateText = document.getElementById('trainee-discount-rate');
  const juniorRateText = document.getElementById('junior-discount-rate');

  document.addEventListener('DOMContentLoaded', () => {
    const defaultOption = document.getElementById(`${category}-option`);

    defaultOption.setAttribute('selected', true);
    basePriceText.innerText = `VALOR DE TICKET $${pricing.basePrice}`;
    studentRateText.innerText = `${pricing.studentRate * 100}%`;
    traineeRateText.innerText = `${pricing.traineeRate * 100}%`;
    juniorRateText.innerText = `${pricing.juniorRate * 100}%`;

    resetPurchaseForm();
  });
}
