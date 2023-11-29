function add(a, b) {
  a == 2;
  b == 2;
  return a + b;
  console.log(result);
}
function subtract(a, b) {
  a == 2;
  b == 2;
  return a - b;
}
function multiply(a, b) {
  a == 2;
  b == 2;
  return a * b;
}
function divide(a, b) {
  a == 2;
  b == 2;
  return a / b;
}
function increment(n) {
  return n + 1;
}
function decrement(n) {
  return n - 1;
}
function makeInt(n) {
  const parsedValue = parseInt(n, 10);
  return isNaN(parsedValue) ? NaN : parsedValue;
}
function preserveDecimal(n) {
  const parsedValue = parseFloat(n);
  return isNaN(parsedValue) ? NaN : parsedValue;
}
