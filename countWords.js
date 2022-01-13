function countWords(para, word1, word2) {
    let paraArr = para.split(" ");
    let count1 = 0; let count2=0;
    paraArr.forEach(element => {
        
        if (element == word1)
            count1++;
        
        if (element === word2)
            count2++;
    });
    console.log(count1, count2);
    if (count1 > count2)
        return word1;
        return word2;
}



let paragraph = 'I love teaching. If you do not love teaching what else can you love . I love JavaScript if you do not love something which can give life to your application what else can you love';

console.log(countWords(paragraph, "love", "you")); 