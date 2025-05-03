// function findLargest(arr) {
//     let max = arr[0];
//     for (let i=1; i<arr.length; i++) {
//         if ( arr[i] > max){
//             max = arr[i];
//         }
//     }
//         return max;
// }
// console.log(findLargest([55,78,45,66,23]));

const myArr =[55,78,45,66,23];
let max = myArr[0];
let min = myArr[0];

    for (let num of myArr) {
        if ( num > max){
            max = num;
        }
        if ( num < min){
            min = num
        }
    }
    console.log(`minimum number -->> ${min} and maximum number is --->${max} `);

// const myarr = [55, 78, 45, 66, 23];
// const largest = Math.max(...myarr);
// console.log(largest); // Output: 78
