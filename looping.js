// looping problem
// for loop
//while loop
// do while loop --> ignore
// for of ---> array loop korar jonno 
// for in ---> object loop korar jonno

const friends = ['Minhajul', 'Juel', 'Tahmeed', 'Neha'];

for (const friend of friends) {
  // console.log(friend);
}

for (let i = 0; i < friends.length; i++){
  console.log(i+1, ":", friends[i]);
}