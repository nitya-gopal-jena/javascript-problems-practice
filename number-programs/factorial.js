
// write a js function to find factorial of a number ?

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log('Factorial :', fact);
}
factorial(5);