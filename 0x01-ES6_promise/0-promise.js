function getData() {
  return new Promise((resolve, reject) => {
    getResponseFromAPI()
      .then(response => {
        if (response.status === 200) {
          resolve(response.data);
        } else {
          reject(Error(response.statusText));
        }
      })
      .catch(error => reject(error));
  });
}

