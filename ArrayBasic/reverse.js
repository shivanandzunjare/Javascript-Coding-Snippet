// function reverseArray(arr) {
//     let reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }

// Example usage:
//console.log(reverseArray([91, 92, 36, 78, 85])); // Output: [5, 4, 3, 2, 1]


function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        // Swap elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp
        left++;
        right--;
    }
    return arr;
}

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
