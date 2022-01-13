function countwords(para) {
    let textArr = para.split(" ");
    let oneLetterCount = 0;
    textArr.forEach(element => {
        if (element.length <= 1)
            oneLetterCount++;
    });
    return numberOfWords = textArr.length - oneLetterCount;
}
