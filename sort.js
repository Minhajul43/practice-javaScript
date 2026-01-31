const numbers = [12, 43, 23, 43, 65, 67, 78, 23];
         // method-1
const num = numbers.sort();
// console.log(num);

           //method -2:manually
for (let i = 0; i < numbers.length; i++){
  for (let j = 0; j < numbers.length - i - 1; j++){
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
// console.log(numbers);

// sort string 
const name = ['adf', 'fsfsdf', 'dfsfrt', 'rtwerw', 'berwef'];
// console.log(name);

const nam = name.sort();

console.log(nam);

