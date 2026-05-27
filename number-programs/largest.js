// write a js function to find the largest between three number ?

function largest() {
  let num1 = 156;
  let num2 = 745;
  let num3 = 27;

  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is larger`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is larger`);
  } else {
    console.log(`${num3} is larger`);
  }
}
largest();
