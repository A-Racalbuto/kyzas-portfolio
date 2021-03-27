let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

arr.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

alert(arr); // 8, 5, 2, 1, -10

/* Alternative */
arr.sort((a, b) => b - a);
