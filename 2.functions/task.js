function getArrayParams(...arr) {
  let max=arr[0];
  let min=arr[0];
  let sum=0;
  let n=arr.length;
  if (arr.length===0) {
    return 0;
  } else {
    for (let i=0;i<arr.length;i++) {
    sum+=arr[i];
    if (max<arr[i]) {
      max=arr[i];
    } else if (min>arr[i]) {
      min=arr[i];
    }
  }
    return {min: min,max: max,avg: Number((sum/n).toFixed(2))};
}
}

function summElementsWorker(...arr) {
  let sum=0;
  if (arr.length===0) {
    return 0;
  } else {
   for (let i=0;i<arr.length;i++) {
    sum+=arr[i];
  }
  return sum; 
  }
}

function differenceMaxMinWorker(...arr) {
  let min=arr[0];
  let max=arr[0];
  if (arr.length===0) {
    return 0;
  } else {
   for (let i=0;i<arr.length;i++) {
    if (max<arr[i]) {
        max=arr[i];
      } else if (min>arr[i]) {
        min=arr[i];
    }
  }
  return max-min; 
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElements=0;
  let sumOddElements=0;
  if (arr.length===0) {
    return 0;
  } else {
    for (let i=0;i<arr.length;i++) {
    if (arr[i]%2===0) {
      sumEvenElements+=arr[i];
    } else {
      sumOddElements+=arr[i];
    }
  }
  return sumEvenElements-sumOddElements; 
  }
}
function averageEvenElementsWorker(...arr) {
  let sumEvenElements=0;
  let countEvenElements=0;
  if (arr.length===0) {
    return 0;
  } else {
    for (let i=0;i<arr.length;i++) {
    if (arr[i]%2===0) {
      sumEvenElements+=arr[i];
      countEvenElements+=1;
    } 
  }
  return sumEvenElements/countEvenElements;
  }
}
function makeWork(arrOfArr,func) {
  let maxWorkerResult=func(...arrOfArr[0]);
  for (let i=0;i<arrOfArr.length;i++) {
    if (func(...arrOfArr[i])>maxWorkerResult) {
      maxWorkerResult=func(...arrOfArr[i]);
    }
  }
  return maxWorkerResult;
}