
exports.min = function min(array) {
  if (Array.isArray(array) && array.length) {
    let minValue = Math.min(...array);
    return minValue;
  } else {
    return 0;
  }

}

exports.max = function max(array) {

  if (Array.isArray(array) && array.length) {
    let maxValue = Math.max(...array);
    return maxValue;
  } else {
    return 0;
  }
}

exports.avg = function avg(array) {
  let i = 0;
  let sum = 0;
  if (Array.isArray(array) && array.length) {
    while (i < array.length) {
      sum = sum + (array[i]);
      i++;
    }
    let avg = sum / array.length;
    return avg;
  } else {
    return 0;
  }
}
