function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // make API call
        if (response from API is successful) {
            resolve(response);
        } else {
            reject(error);
        }
    });
}
