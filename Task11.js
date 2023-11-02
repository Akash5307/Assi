const axios = require('axios');

const baseURL = 'https://api.example2368238.com'; 

function searchByISBN(isbn) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/books?isbn=${isbn}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

searchByISBN('123456789')
  .then((isbnResult) => {
    console.log('Search by ISBN:', isbnResult);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
