const Car = require('../models/cars');

exports.saveCar = (req, res, next) => {
  const newCar = new Car(
    req.body.owner,
    req.body.state,
    req.body.price,
    req.body.manufacturer,
    req.body.model,
    req.body.body_type,
  );

  const car = Car.saveCar(newCar);

  const data = {
    status: 201,
    data: car,
  };

  res.status(201).json(data);
};

exports.getCars = (req, res, next) => {
  const cars = Car.getCars();

  const data = {
    status: 200,
    data: cars,
  };
  res.status(200).json(data);
};
