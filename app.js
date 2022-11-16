console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

//Exercise 1
for (let n = 1; n <= 100; n++) {
    if (n % 2 !== 0) {
      console.log(n);
    }
  }
  


  //Exercise 2
  for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log('FIZZBUZZ')
    } else if (n % 3 === 0) {
      console.log('FIZZ')
    } else if (n % 5 === 0) {
      console.log('BUZZ')
    }
  }
  


  //Exercise 3
  let n = 1;

  while (n <= 100) {
    if (n % 2 !== 0) {
      console.log(n)
    }
    n++;
  }
  

  let n = 1;
  
  do {
  if (n % 3 === 0 && n % 5 === 0) {
      console.log('FIZZBUZZ')
    } else if (n % 3 === 0) {
      console.log('FIZZ')
    } else if (n % 5 === 0) {
      console.log('BUZZ')
      }
  n++;
 
  } while (n <= 100);




  //Exercise 4
  
  let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
  let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
  

  for (let test = 0; test <= n; test++) {
 
    if (test !== value) {
      console.log('Did not find value.')
 
    } else if (test == value) {
 
      console.log('Found value!')
      break;
    }
  }
 
  console.log(value);



  //Exercise 5


  let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let n = Math.round(Math.random() * (1000 - 1) + 1);
  let start = Math.round(Math.random() * (10 - 1) + 1);
  
  for (start; start < n; start++) {
    if (start == fizzDivisor) {
      console.log('FIZZ')
      break;
    } else if (start == buzzDivisor) {
      console.log('BUZZ')
      break;
    }
  }




