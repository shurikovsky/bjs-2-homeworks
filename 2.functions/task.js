function getArrayParams(...arr) {
  let min = arr[0], max = arr[0], sum = 0, avg;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum +=arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
     return (Math.max(...arr) - Math.min(...arr));
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement =0, sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
  return (sumEvenElement - sumOddElement);
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0, countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 ===0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }    
  return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    const maxWorker = func(...arrOfArr[i]);
    if (maxWorker > maxWorkerResult) {
      maxWorkerResult = maxWorker;
    }
  }
  return maxWorkerResult;
}
