function countVowelConso(str) {
    let vowels= "aeiouAEIOU";
    let consonents = 0;
    let vowel = 0;
    for(let char of str){
        if( char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
            if( vowels.includes(char)) {
                vowel++;
            }else{
                consonents++;
            }
        }
    }
    return { vow : vowel, conso: consonents}
}
console.log(countVowelConso("Hello World")); // { vowels: 3, consonants: 7 }
console.log(countVowelConso("JavaScript"));  // { vowels: 3, consonants: 7 }
console.log(countVowelConso("AEIOUxyz"));   // { vowels: 5, consonants: 3 }
console.log(countVowelConso("123!@#abc"));  // { vowels: 1, consonants: 2 }