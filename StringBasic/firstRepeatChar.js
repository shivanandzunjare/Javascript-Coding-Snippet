 function firstRepeatingChar(str){
    let seen = new Set();
    for( let char of str) {
        if(seen.has(char)) return char;
        seen.add(char);
    }
    return null;
 }

console.log(firstRepeatingChar("abca")); // "a"
console.log(firstRepeatingChar("abcdebf")); // null