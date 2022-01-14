//Write a function which check if items of an array are unique?

function checkUniqueArray(arr) {
    let newset = new Set(arr);
    if (arr.length === newset.size)
        return true;
        return false;
}
console.log(checkUniqueArray(['ab', 'ba', 'ac', 'ba']));