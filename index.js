// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(42 - someValue);
}

function distanceFromHqInFeet(someValue) {
  return (distanceFromHqInBlocks(someValue) * 264)
}

function distanceTravelledInFeet(someValue, anotherValue) {
  return (Math.abs(someValue-anotherValue) * 264);
}

function calculatesFarePrice(someValue, anotherValue) {
    let distance = distanceTravelledInFeet(someValue, anotherValue);
    if (distance < 401){
      return 0;
    }
    if (distance <= 2000){
      return ((distanceTravelledInFeet(someValue, anotherValue) - 400) * .02);
    }
   if ((distanceTravelledInFeet(someValue, anotherValue) > 2001) || (distanceTravelledInFeet(someValue, anotherValue) <= 2500)){
      return 25;
    }
    
}