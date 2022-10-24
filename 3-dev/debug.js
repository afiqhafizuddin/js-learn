const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt("Degrees Celcius:")),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
