
// write a js function to find out the sum of digits of a number ?

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        let rem = num % 10;
        sum = sum + rem;
        num = Math.trunc(num / 10);
    }
    console.log('Sum of digits : ', sum);
}
sumOfDigits(561);