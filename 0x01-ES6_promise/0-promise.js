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

getData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

async function foo(){
    try{
        const data = await getData();
        console.log(data);
    }catch(error){
        console.error(error)
    }
}
