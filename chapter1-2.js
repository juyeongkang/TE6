console.log("this is chapter1-2 answer");

//FizzBuzz

  // console.log to print all the numbers from 1 to 100,
for (var i = 1; i < 101; i++) {
  
  // a least common multiple = 3*5=15
  if (i % 15 == 0) console.log("FizzBuzz");
  
  // For numbers divisible by 3, print "Fizz"
  else if (i % 3 == 0) console.log("Fizz");
  
  // for numbers divisible by 5 (and not 3), print "Buzz"
  else if (i % 5 == 0) console.log("Buzz");
  
  //other than 3, 5, 15 divisible numbers, just let it be numbers
  else console.log(i);
}
