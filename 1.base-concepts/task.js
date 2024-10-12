"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant;
  discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) {
    arr[0] = - b / (2 * a);
  } else if (discriminant > 0) {
      arr[0] = ((-b + Math.sqrt(discriminant)) / (2 * a));
      arr[1] = ((-b - Math.sqrt(discriminant))/ (2 * a));
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentToShares, percentMonth, bodyCredit, paymentMonth, allSum;
  percentToShares = percent / 100;
  percentMonth = percentToShares / 12;
  bodyCredit = amount - contribution;
  paymentMonth = bodyCredit * (percentMonth + (percentMonth / ((Math.pow((1 + percentMonth), countMonths) - 1))));
  allSum = parseFloat((paymentMonth * countMonths).toFixed(2));
  return allSum;
}