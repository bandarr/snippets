function mergeSort(arr) {
  if (arr.length <=1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  console.log("\nAGAIN!!");
  console.log("Left: " + left);
  console.log("Right: " + right)
  return merge(left, right);
}


function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++
    } else {
      result.push(right[j]);
      j++;
    }
  }
  console.log("Result: " + result);

  console.log("What remains of left: " + left.slice(i));
  console.log("What remains of right: " + right.slice(j));

  //what remains is already sorted
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  let yarg = result;

  console.log("Yarg: " + yarg);

  return yarg;
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(arr);
const sortedArr = mergeSort(arr);

console.log(sortedArr); 
