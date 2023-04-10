"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d=b**2-4*a*c;
  if (d<0) {
    return arr;
  } else if (d===0) {
    arr.push(-b/(2*a));
    return arr;
  } else {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P=(percent/100)/12;
  let S=amount-contribution;
  let monthPay=S * (P + (P / (((1 + P)**countMonths) - 1)));
  let creditSum=Number((monthPay*countMonths).toFixed(2));
  return creditSum;
}