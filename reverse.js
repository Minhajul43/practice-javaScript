const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers);
         // method-1
// call by reverse function
// const reversed=numbers.reverse();
// console.log(reversed);

        // method-2
// another method of reverse array "unshift"
const rev_number = [];
for (const num of numbers) {
  rev_number.unshift(numbers);
}
// console.log(rev_number);
   
        // method-3

for (let i = numbers.length; i > 0; i--){
  console.log(i);
}


