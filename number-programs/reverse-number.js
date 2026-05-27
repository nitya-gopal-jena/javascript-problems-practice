
// write a js function to reverse a number ?

function reverseNo(num) {
    let reverse = 0;
    while (num > 0) {
        let rem = num % 10;
        reverse = (reverse * 10) + rem;
        num = Math.trunc(num / 10);
    }
    console.log('Reversed No :', reverse);
}
reverseNo(2536);