
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

number = prompt("Donne un nombre dont nous calculerons le factoriel");

let output =  "Factorial " + number + " is : " + factorial(number);
console.log(output);