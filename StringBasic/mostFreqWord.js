function mostFrequentWord(sentence) {
    let words = sentence.split(/\s+/);
    let wordCount = {};
    let maxWord = "";
    let maxCount = 0;

    for(let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
        if(wordCount[word] > maxCount) {
            maxCount = wordCount[word];
            maxWord = word;
        }
    }
     return maxWord;
}
console.log(mostFrequentWord("the quick brown fox jumps over the lazy dog the"));