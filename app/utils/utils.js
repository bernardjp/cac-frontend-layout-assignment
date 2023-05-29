import { Pricing } from '../data.js';

export function calculateTotal(category, amount) {
  const pricing = new Pricing();
  return pricing[category] * amount;
}
