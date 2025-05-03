function moveZeroToEnd(arr) {
    let nonZeroIndex = 0 ;
    for ( let i=0; i<arr.length; i++) {
        if( arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[nonZeroIndex]    ;
            arr[nonZeroIndex] = temp;
            nonZeroIndex++;
        }
    }
    return arr;

}

console.log(moveZeroToEnd([0, 1, 0, 3, 12]));