const arr = [1, 2, 3, 4, 5];
// Expected Result:
// [6, 5, 4, 3, 2, 1, 0];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr);
