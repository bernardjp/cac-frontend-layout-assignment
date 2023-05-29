export class FormValues {
  name = '';
  lastname = '';
  email = '';
  quantity = '';
  category = '';
}

export class Pricing {
  #basePrice = 200;
  #studentRate = 0.8;
  #traineeRate = 0.5;
  #juniorRate = 0.15;

  get basePrice() {
    return this.#basePrice;
  }
  get studentRate() {
    return this.#studentRate;
  }
  get traineeRate() {
    return this.#traineeRate;
  }
  get juniorRate() {
    return this.#juniorRate;
  }

  get student() {
    return this.basePrice - this.studentRate * this.basePrice;
  }
  get trainee() {
    return this.basePrice - this.traineeRate * this.basePrice;
  }
  get junior() {
    return this.basePrice - this.juniorRate * this.basePrice;
  }
}
