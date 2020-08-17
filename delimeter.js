const concatenate = (list, delimeter) => {
    var d = '';
    var my_string = '';
   
    for (number of list) {
        my_string += (d + String(number));
        d = delimeter;
    }
    return my_string;
}
console.log(concatenate([20, 21, 22, 24, 25, 26, 27], ", "));
console.log(concatenate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ". "));
