const axios = require('axios');
const baseURL = 'https://api.example.com'; // Replace with your API's base URL

function searchByTitle(title) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/books?title=${title}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

searchByTitle('Book 1')
  .then((titleResult) => {
    console.log('Search by Title:', titleResult);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
