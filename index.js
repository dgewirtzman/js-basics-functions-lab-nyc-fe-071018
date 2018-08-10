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
    } else if (distance <= 2000){
      return ((distance - 400) * .02);
    } else if ((distance > 2001) && (distance <= 2500)){
      return 25;
    } else {
      return 'cannot travel that far';
   }
}