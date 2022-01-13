//returns number of words in the paraexcluding single letter words
function countwords1(para) {
    let textArr = para.split(" ");
    let oneLetterCount = 0;
    textArr.forEach(element => {
        if (element.length <= 1)
            oneLetterCount++;
    });
    return numberOfWords = textArr.length - oneLetterCount;
}

//returns number of words in para including single letter words
countwords2 = (para) => para.split(" ").length;
