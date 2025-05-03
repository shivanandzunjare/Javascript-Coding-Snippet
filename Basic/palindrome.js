//palindrome number 
function isPalindrome(num){
    let reversed =0;
    let original = num;
    while (num > 0){
        reversed = reversed * 10 + num % 10;
        num = num / 10;
    }
    return original === reversed;

}
console.log(isPalindrome(121)); 