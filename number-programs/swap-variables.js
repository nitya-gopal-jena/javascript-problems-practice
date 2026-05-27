
// write a js function to swap two variable without third variable ?

function swapVariables() {
    let a = 10;
    let b = 20;
    [a, b] = [b, a]   //Destructuring
    console.log(a,b); 
}
swapVariables();

// write a js function to swap two variable with third variable ?

function swapVariables1() {
    let a = 10;
    let b = 20;
    let c = a;
    
    a = b;
    b = c;
    console.log(a,b);
}
swapVariables1();