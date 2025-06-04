function moveZeroAtStart(arr){
    let nonZeroIndex = arr.length -1 ;
    for( let i = arr.length -1 ; i>=0; i--){
        if ( arr[i] !== 0){
            let temp = arr[i];
            arr[i] = arr[nonZeroIndex];
            arr[nonZeroIndex] = temp;
            nonZeroIndex--;

        }
    }
    return arr;

}

console.log(moveZeroAtStart([88,0,55,0,45,23,12,0]))