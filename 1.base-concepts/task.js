"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }
  if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent *= 0.01 / 12;
  let credit = amount - contribution;
  let monthlyPayment = credit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let sum = monthlyPayment * countMonths;
  return Number(sum.toFixed(2));
}
