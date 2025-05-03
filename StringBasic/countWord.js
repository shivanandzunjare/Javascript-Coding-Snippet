function countWord(str){
    let count = 0;
    let inWord = false;

    for(let i=0; i<str.length; i++) {
        if(str[i] !== ' ' && !inWord) {
            count++;
            inWord = true;
        }else if(str[i] === ' ') {
            inWord = false;
        }
    }
    return count;
}

console.log(countWord("Hello world, this is JavaScript")); // 5
console.log(countWord("  Leading and trailing spaces  ")); // 3
console.log(countWord("Multiple   spaces between words")); // 4
console.log(countWord("")); // 0
console.log(countWord("    ")); // 0