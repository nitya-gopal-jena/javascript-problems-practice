
// write a js function to check given number is positive, negative or zero ?

function PNZ(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is zero`); 
    }
}
PNZ(153);
PNZ(-45);
PNZ(0);