
// write a js function to print fibonacci series of a given number ?

function fibonacci(num) {

    let a = 0;
    let b = 1;
    let c = 0;
    console.log(a);
    console.log(b);

    for (let i = 2; i <= num; i++){
        c = a + b;
        console.log(c);
        a = b;
        b = c  
    }
    console.log(b);   
}

fibonacci(10)