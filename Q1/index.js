function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject('Input is not an array');
      }
  
      const lowercaseWords = mixedArray
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());
  
      resolve(lowercaseWords);
    });
  }
  

  // Test case 1 with valid input(Array)
  const mixedArray1 = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray1)
    .then(result => console.log(result))
    .catch(error => console.error(error));

    // Test case 2 with invalid input(!Array)
    
    const mixedArray2 = 'PIZZA';

    lowerCaseWords(mixedArray2)
    .then(result => console.log(result))
    .catch(error => console.error(error));
