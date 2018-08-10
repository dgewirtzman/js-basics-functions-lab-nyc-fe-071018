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
  switch(distanceTravelledInFeet(someValue, anotherValue)) {
    case distanceTravelledInFeet() < 400:
      return '0';
      break;
  }
}