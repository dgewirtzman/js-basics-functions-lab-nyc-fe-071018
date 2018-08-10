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
    if (distanceTravelledInFeet(someValue, anotherValue) < 401){
      return '0';
    }
    
    }
  }
}