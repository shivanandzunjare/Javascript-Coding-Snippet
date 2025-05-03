function secondLargest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    
    return secondLargest === -Infinity ? null : secondLargest;
}

// Example usage:
console.log(secondLargest([55, 78, 45, 66, 23])); // Output: 66
console.log(secondLargest([10, 10, 10])); // Output: null
