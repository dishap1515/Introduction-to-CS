const ssort = require('./selection-sort');
const bsort = require('./bubble-sort');
const isort = require('./insertion-sort');


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

function sortArray(array) { 
  for(let i = 1; i < 1000; i++ ) { 
      array.sort(function(a, b){return a - b});
  }
    
  return array;
}

var selectionSortedArray = ssort.selectionSort(arr.slice());
var bubbleSortedArray = bsort.bubbleSort(arr.slice());
var insertionSortedArray = isort.insertionSort(arr.slice());
var inbuiltSortedArray = sortArray(arr.slice());

if (!inbuiltSortedArray === selectionSortedArray) { 
  try { 
    throw ('Array not Sorted.');
  } catch(e) {
   
    console.log(e);
  }
}
if (!inbuiltSortedArray === bubbleSortedArray) { 
  try { 
    throw ('Array not Sorted.');
  } catch(e) {
   
    console.log(e);
  }
}
if (!inbuiltSortedArray === insertionSortedArray) { 
  try { 
    throw ('Array not Sorted.');
  } catch(e) {
   
    console.log(e);
  }
}