const resolvedPromise = () => {
    return  new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!'  });
        },  500);
    });

};
const rejectedPromise = () => {
       return new Promise((_, reject) => {
        setTimeout(() => {
             reject({ error: 'delayed exception!' });
        }, 500);
    });
};

// Test case 1 with resolved promise
resolvedPromise()
     .then((result) => console.log(result))
     .catch((error) => console.log(error));

// Test case 2 with rejected promise
rejectedPromise()
     .then((result) => console.log(result))
    .catch((error) => console.log(error));