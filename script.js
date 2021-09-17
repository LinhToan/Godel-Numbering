//["insert variable here"].charCodeAt(0).toString(16)

// This program will take in a string and convert said string to a Godel number.
// The string's characters will be converted to their decimal ASCII number, 
// then each preceeding decimal ASCII number will be used as a power of a prime number.
// The resulting number is the Godel number for our string.

// Create function to generate prime numbers.
function godelNumbering(string){
  
  const stringArr = string.split(""); // Use split() to convert each string element to ASCII number.
  let asciiArr = []; // Initialize array for ASCII numbers.
  const primeArr = primeGenerator(asciiArr.length); // Stores array of prime numbers.
  let godelArr = []; // Initialize array for Godel numbers.

  // Converts each element in string to ASCII
  for(const char of stringArr){
    asciiArr.push(char.charCodeAt(0).toString(10));
  }

  // Raises each prime number to ASCII number to produce Godel number.
  for(let i=0; i<primeArr.length; i++){
    godelArr.push(Math.pow(primeArr[i], asciiArr[i]));
  }
  return godelArr.join();
}

// Generate prime numbers
function primeGenerator(num){
  let current = 3 // now we start checking with 3
  let counter = 1 // counter for number of primes discovered thus far
  let arr = [2]; // output array of prime numbers.
    
  while(counter < num){
    const maxFactor = Math.floor(Math.sqrt(current)); // create upper bound for numbers to divide current

      let isPrime = true; // assume prime for now        
      
      for(let i=3; i<=maxFactor+1; i++){ // checks for divisibility
        if(current % i === 0){
          isPrime = false;
        }
      }

      if(isPrime){
        counter += 1;
        arr.push(current);
      }

    current += 2; // checks next odd number since 2 is the only even prime
  }
  return arr;
}

//console.log(primeGenerator(5));
console.log(godelNumbering('aaa'));
