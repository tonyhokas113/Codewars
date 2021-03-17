function zeroFuel(distanceToPump, mpg, fuelLeft) {
   return mpg * fuelLeft >= distanceToPump ? true : false;
} 




console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
console.log(zeroFuel(100, 100, 2));



// best option:

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };