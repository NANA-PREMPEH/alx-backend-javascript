function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Make API call here
        fetch('https://some-api.com/data')
            .then(response => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    reject(Error(response.statusText));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}
