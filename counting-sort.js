function countingSort(arr){
  var helper = []; 
                   
  for(var i = 0; i<arr.length; i++){
    if(!helper[arr[i]]){
        helper[arr[i]] = 1;
    }else{
        helper[arr[i]] += 1;
    }
  }

  var newArr = []; 
  for(i in helper){
    while(helper[i]>0){
        newArr.push(parseInt(i));
        helper[i]--;
    }
  }
  return newArr; 
}

var arr = [5,1,2,2,5,0,4,3,2,1,0];
console.log(countingSort(arr));