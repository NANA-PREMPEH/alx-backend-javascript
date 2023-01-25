/**
 * getResponseFromAPI is a function that returns a promise,
 * this function can be used to make an API call and handle the response
 */
function getResponseFromAPI() {
  // Returns a new promise
  return new Promise((resolve, reject) => {
    // here you can make your API call and check the response
    // if the response is successful, then call the resolve function
    if (true) {
        resolve();
    } 
    // if the response is unsuccessful, call the reject function
    else {
        reject();
    }
  });
}

export default getResponseFromAPI;
