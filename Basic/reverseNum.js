function reverseNumber(num){
    let reversed = 0;
    num = Math.abs(num);
    while(num > 0){
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}
console.log(reverseNumber(1234));  