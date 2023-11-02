const axios = require('axios');
const baseURL = 'https://api.example.com'; 

// Function to search for books by author using Promises
function searchByAuthor(author) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/books?author=${author}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

searchByAuthor('Author A')
  .then((authorResult) => {
    console.log('Search by Author:', authorResult);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
