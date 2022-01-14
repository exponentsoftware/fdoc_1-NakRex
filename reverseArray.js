/* Reversing an array: Arrays have a reverse method which changes the array
 by inverting the order in which its elements appear. 
 For this exercise, write a function, reverseArray. 
 The  reverseArray, takes an array as argument and produces a 
 new array that has the same elements in the inverse order. Without reverse method.*/
function reverseArray(arr) {
    let a = 0;
    if (arr.length % 2 === 0)
        a = 0;
        a = 1;
    for (let i = 0; i <= arr.length/2-a; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}