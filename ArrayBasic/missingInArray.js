function missingElememtInArray(arr) {

    let n = arr.length + 1;
    let expectedSum = n * ( n + 1) / 2;
    let actualSum = 0;
    for ( let i of arr) {
        actualSum = actualSum + i;
    } 
    return expectedSum - actualSum ;

}

console.log(missingElememtInArray([1, 2, 4, 5, 6] ));