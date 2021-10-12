const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch('https://api.pandascore.co/additions?page=1&per_page=50&type=&videogame=', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));