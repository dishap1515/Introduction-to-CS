function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomArray(num) {
  var ints = [];
  while (ints.length < num) {
    var randNum = getRandomInt(1, 91);
    if(!ints.indexOf(randNum) > -1){
      ints.push(randNum);
    }
  }
  return ints;
}
var arr = getRandomArray(10);
console.log(arr);