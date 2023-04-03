// 1-Write a function to find the largest element in an array.
function findLargest(arr) {
    return Math.max(...arr);
  }
  
  const arr = [1, 5, 3, 8, 2];
  const largest = findLargest(arr);
  console.log(largest); // Output: 8
  
// 2-Write a function to find the smallest element in an array.
function findSmallest(arr) {
    return Math.min(...arr);
  }
  
  // Example usage:
  const arr = [10, 2, 5, 8, 1];
  console.log(findSmallest(arr)); // Output: 1
  
// 3-Write a function to find the sum of all elements in an array.
function sumArrayElements(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
// 4-Write a function to find the average of all elements in an array.
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
  }
  
// 5-Write a function to find the median of all elements in an array.
function median(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    var len = arr.length;
    var mid = Math.floor(len / 2);
  
    if (len % 2 === 0) {
      return (arr[mid - 1] + arr[mid]) / 2;
    } else {
      return arr[mid];
    }
  }
  var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log(median(arr)); // Output: 4

// 6-Write a function to remove all duplicates from an array.
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  

// 7-Write a function to sort an array in ascending order.
function sortAscending(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
    return arr;
  }
  
// 8-Write a function to sort an array in descending order.
function sortDescending(arr) {
    arr.sort(function(a, b) {
      return b - a;
    });
    return arr;
  }
  
// 9-Write a function to shuffle the elements of an array randomly.
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  