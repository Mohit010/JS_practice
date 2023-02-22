let i = 1;

while (i <= 20) {
    if (i % 3 == 0) {
        console.log(i ,"FIZZ");
    }
    if (i % 5 == 0) {
        console.log(i, "BUZZ");
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    }
    i++;
}