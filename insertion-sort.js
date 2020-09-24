function insertionSort(array) {
    
    for (let i = 1; i < array.length; i++) {

        for (let j = i; j > 0; j--) {
            if (array[j] < array[j-1]) {
                const temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }else {
                break;
            }
        }
    }
    return array;
}
exports.insertionSort = insertionSort;
//console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 55, 92]));