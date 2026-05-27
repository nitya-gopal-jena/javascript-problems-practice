
// write a js function to count digits in a number ?

function countDigits(num) {
    let count = 0;
    while (num > 0) {
        let rem = num % 10;
        count++;
        num = Math.trunc(num / 10);
    }
    console.log("Total digits: ", count );
}
countDigits(123);