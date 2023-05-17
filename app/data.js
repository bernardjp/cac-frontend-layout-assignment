export class Discounts {
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
    return this.studentRate * this.basePrice;
  }

  get trainee() {
    return this.traineeRate * this.basePrice;
  }

  get junior() {
    return this.juniorRate * this.basePrice;
  }
}
