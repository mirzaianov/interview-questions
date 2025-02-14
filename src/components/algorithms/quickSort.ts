// Quick sort with additional space

const quickSort = (arr: number[]): number[] => {
  const len: number = arr.length;

  if (len < 2) return arr;

  const pivotIndex: number = Math.floor(len / 2);
  const pivot: number = arr[pivotIndex];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < len; i += 1) {
    if (i === pivotIndex) continue;

    const curr: number = arr[i];

    if (curr <= pivot) {
      left.push(curr);
    } else {
      right.push(curr);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

// Quick sort WITHOUT additional space

// function quickSort(arr) {
//   return quickSortHelper(arr, 0, arr.length - 1);
// }

// function quickSortHelper(arr, left, right) {
//   if (arr.length < 2) return arr;

//   const index = partition(arr, left, right);

//   if (left < index - 1) {
//     quickSortHelper(arr, left, index - 1);
//   }

//   if (index < right) {
//     quickSortHelper(arr, index, right);
//   }

//   return arr;
// }

// function partition(arr, left, right) {
//   const pivot = arr[Math.floor((left + right) / 2)];

//   while (left <= right) {
//     while (arr[left] < pivot) {
//       left++;
//     }

//     while (arr[right] > pivot) {
//       right--;
//     }

//     if (left <= right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }

//   return left;
// }

console.log(quickSort([3, 2, 15, 1, 5, 3, 11, 0]));
