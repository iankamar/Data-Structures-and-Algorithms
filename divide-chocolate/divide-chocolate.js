/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function (sweetness, k) {
  let low = Infinity;
  let high = 0;
  for (const val of sweetness) {
    low = Math.min(low, val);
    high += val;
  }

  let ans = low;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (isOk(sweetness, mid, k)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};

function isOk(sweetness, target, k) {
  let totalPeople = k + 1;
  let sum = 0;
  for (const val of sweetness) {
    sum += val;
    if (sum >= target) {
      sum = 0;
      totalPeople--;
    }
  }

  return totalPeople <= 0;
}
