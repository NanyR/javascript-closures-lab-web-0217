const app = "I don't do much."

function bumpCounter(){
let counter=0;
  function addBump(){
    counter+=1;
  };

  function getBumps(){
    return counter;
  };

  return {
    addBump,
    getBumps
  }
}



function createAnimal(animalType){
  function innerFunction(deadlyDevice){
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
  return innerFunction;
}


const sharkCreator= createAnimal('Shark');
const sharkWithFrickinLaserbeam= sharkCreator('Laserbeam');
const sharkWithFrickinCannon= sharkCreator('Cannon');
