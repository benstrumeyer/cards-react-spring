const pi = 3.141592653589793238462643383275502;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function mult(n1, n2) {
  return n1 * n2;
}

function div(n1, n2) {
  return n1 / n2;
}

export default pi;
export {doublePi, triplePi, sum, sub, mult, div};