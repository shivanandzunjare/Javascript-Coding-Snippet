function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    let charCount = {};

    for (let char of str1.toLowerCase()){
        charCount[char] = ( charCount[char] || 0 ) +1;
    }
    for(let char of str2.toLowerCase()) {
        if(!charCount[char]) return false;
        charCount[char]--;
    }
    return true;
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("Dormitory", "Dirtyroom")); // true
console.log(isAnagram("abc", "abcd")); // false