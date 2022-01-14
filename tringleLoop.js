/*Looping a triangle: Write a loop that makes seven calls to
console.log to output the following triangle:*/
for (let i = 0; i <= 6; i++){
    for (let j = 0; j <= i; j++){
        process.stdout.write("#")
    }
    console.log();
}

//by using only console.log
for (let line = "#"; line.length < 8; line += "#"){
    console.log(line);
}
  