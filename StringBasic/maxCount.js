function mostFrequentChar(str){
    let charCount = {};
    let maxChar ="";
    let maxCount= 0;

    for(let char of str){
        charCount[char] = (charCount[char] || 0 ) + 1;
        if(charCount[char] > maxCount){
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(mostFrequentChar("hello"));