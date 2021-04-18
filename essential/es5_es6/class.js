// 상속
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel){
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle);
console.log(daughtersBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license){
    super(name, wheel);
    this.license = license
  }
}