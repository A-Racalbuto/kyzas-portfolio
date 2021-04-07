console.log('Before');

setTimeout(() => {
  console.log('Wake up!');
}, 1000);

console.log('After');

setInterval(() => {
  console.log('Counting...');
}, 1000);

// Before
// After
// (after 1 sec...) Wake up!

// | t0
// | sum(2, 3)
// | sum(2, 5)
// | setTimeout() -> operations...
// | sum(3, 4)
// | sum(5, 7)
// | result <- operations...
// | t1000
