const uuid = require('uuid');

const carData = [];

class Car {
  constructor(owner, state, status, price, manufacturer, model, body_type) {
    this.id = this.generateId();
    this.owner = owner;
    this.state = state;
    this.status = status;
    this.price = price;
    this.manufacturer = manufacturer;
    this.model = model;
    this.body_type = body_type;
    this.created_on = new Date();
  }

  static saveCar(car) {
    carData.push(car);

    // Return last saved Record
    return carData[carData.length - 1];
  }

  static getCars() {
    return carData;
  }

  static getCarByUser(user_id) {
    const cars = [];

    for (let i = 0; i < carData.length; i++) {
      if (carData[i].owner === user_id) {
        cars.push(carData[i]);
      }
    }
    return cars;
  }

  generateId() {
    return uuid.v1();
  }
}

module.exports = Car;
